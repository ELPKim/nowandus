// Translation data
const translations = {
    'ko': {
        'header-title': 'Nowandus',
        'header-subtitle': '장거리 커플을 위한 공간',
        'anniversary-title': '우리의 여정',
        'anniversary-text-before': '우리는',
        'anniversary-text-after': '일 동안 사랑해왔습니다.',
        'countdown-title': '우리가 다시 만날 때까지',
        'countdown-text-before': '단',
        'countdown-text-after': '남았습니다!',
        'footer-text': '장거리 연인들을 위해 ❤️로 제작되었습니다',
        'met-message': '우리는 만났습니다!',
        'days-unit': '일',
        'hours-unit': '시간',
        'minutes-unit': '분',
        'seconds-unit': '초',
        'settings-button': '설정 변경',
        'settings-title': '날짜 설정',
        'label-anniversary': '기념일:',
        'label-meeting': '다음 만남:',
        'label-timezone': '만남 장소 시간대:',
        'timezone-info': '기준 시간대:'
    },
    'en': {
        'header-title': 'Nowandus',
        'header-subtitle': 'A space for long-distance couples',
        'anniversary-title': 'Our Journey',
        'anniversary-text-before': "We've been in love for",
        'anniversary-text-after': 'days.',
        'countdown-title': 'Until We Meet Again',
        'countdown-text-before': 'Only',
        'countdown-text-after': 'left!',
        'footer-text': 'Made with ❤️ for long-distance lovers',
        'met-message': "We've met!",
        'days-unit': 'd',
        'hours-unit': 'h',
        'minutes-unit': 'm',
        'seconds-unit': 's',
        'settings-button': 'Settings',
        'settings-title': 'Set Your Dates',
        'label-anniversary': 'Anniversary:',
        'label-meeting': 'Next Meeting:',
        'label-timezone': 'Meeting Timezone:',
        'timezone-info': 'Target Timezone:'
    }
};

let currentLanguage = localStorage.getItem('language') || 'ko';
let anniversaryDate = localStorage.getItem('anniversaryDate') || '2022-01-01';
let nextMeetingDate = localStorage.getItem('nextMeetingDate') || '2024-12-25T12:00';
let meetingTimezone = localStorage.getItem('meetingTimezone') || Intl.DateTimeFormat().resolvedOptions().timeZone;

function toggleSettings() {
    const settings = document.getElementById('settings');
    settings.style.display = settings.style.display === 'none' ? 'block' : 'none';
}

function saveSettings() {
    anniversaryDate = document.getElementById('input-anniversary').value;
    nextMeetingDate = document.getElementById('input-meeting').value;
    meetingTimezone = document.getElementById('input-timezone').value;

    localStorage.setItem('anniversaryDate', anniversaryDate);
    localStorage.setItem('nextMeetingDate', nextMeetingDate);
    localStorage.setItem('meetingTimezone', meetingTimezone);

    updateDaysTogether();
    updateCountdown();
    document.getElementById('display-timezone').textContent = meetingTimezone;
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    updateDaysTogether();
    updateCountdown();
}

function updateDaysTogether() {
    const today = new Date();
    const anniv = new Date(anniversaryDate);
    const differenceInTime = today.getTime() - anniv.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    document.getElementById('days-together').textContent = Math.max(0, differenceInDays);
}

function updateCountdown() {
    const today = new Date();
    
    // Create the target date in the specified timezone
    const targetDateStr = nextMeetingDate; // e.g., "2024-12-25T12:00"
    const targetDate = new Date(targetDateStr);
    
    // Convert to target timezone time
    // We use Intl.DateTimeFormat to find the offset between current user and target TZ
    const targetInTZ = new Date(targetDate.toLocaleString('en-US', { timeZone: meetingTimezone }));
    const nowInTZ = new Date(new Date().toLocaleString('en-US', { timeZone: meetingTimezone }));
    
    const differenceInTime = targetDate.getTime() - today.getTime();
    
    // Since Date objects are UTC-based internally, we just need to compare them directly
    // but the input from datetime-local is "local to the browser".
    // Let's assume the user input is meant for the TARGET timezone.
    
    const targetUTC = convertToUTC(targetDateStr, meetingTimezone);
    const remaining = targetUTC - today.getTime();

    const timerElement = document.getElementById('countdown-timer');

    if (remaining > 0) {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        const d = translations[currentLanguage]['days-unit'];
        const h = translations[currentLanguage]['hours-unit'];
        const m = translations[currentLanguage]['minutes-unit'];
        const s = translations[currentLanguage]['seconds-unit'];

        timerElement.textContent = `${days}${d} ${hours}${h} ${minutes}${m} ${seconds}${s}`;
    } else {
        timerElement.textContent = translations[currentLanguage]['met-message'];
    }
}

// Helper to convert local input date (as if it was in target TZ) to UTC timestamp
function convertToUTC(dateStr, tz) {
    const date = new Date(dateStr);
    const invDate = new Date(date.toLocaleString('en-US', { timeZone: tz }));
    const diff = date.getTime() - invDate.getTime();
    return date.getTime() + diff;
}

function populateTimezones() {
    const select = document.getElementById('input-timezone');
    // Common timezones - in a real app you might want a full list
    const tzs = [
        "UTC", "Asia/Seoul", "America/New_York", "Europe/London", "Europe/Paris", 
        "Asia/Tokyo", "Australia/Sydney", "America/Los_Angeles", "Asia/Shanghai"
    ];
    
    // Add current one if not in list
    if (!tzs.includes(meetingTimezone)) tzs.push(meetingTimezone);
    
    tzs.sort().forEach(tz => {
        const opt = document.createElement('option');
        opt.value = tz;
        opt.textContent = tz;
        if (tz === meetingTimezone) opt.selected = true;
        select.appendChild(opt);
    });
}

// Update the counters when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize inputs
    document.getElementById('input-anniversary').value = anniversaryDate;
    document.getElementById('input-meeting').value = nextMeetingDate;
    document.getElementById('display-timezone').textContent = meetingTimezone;
    
    populateTimezones();
    setLanguage(currentLanguage);
    
    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});