// Translation data
const translations = {
    'ko': {
        'header-title': 'Now and Us',
        'header-subtitle': '장거리 커플을 위한 공간',
        'anniversary-title': '우리가 만난 시간',
        'anniversary-text-before': '우리는',
        'anniversary-text-after': '일 동안 사랑해왔습니다.',
        'countdown-title': '다음 만나기까지 남은 시간',
        'countdown-text-before': '단',
        'countdown-text-after': '남았습니다!',
        'world-clock-title': '서로의 나라 시간',
        'my-time-label': '나의 시간',
        'partner-time-label': '상대방의 시간',
        'footer-text': '장거리 연인들을 위해 ❤️로 제작되었습니다',
        'met-message': '우리는 만났습니다!',
        'days-unit': '일',
        'hours-unit': '시간',
        'minutes-unit': '분',
        'seconds-unit': '초',
        'settings-button': '날짜 변경',
        'label-anniversary': '기념일:',
        'label-meeting': '다음 만남:',
        'label-timezone': '만남 장소 시간대:',
        'timezone-info': '기준 시간대:',
        'change-partner-tz': '시간대 설정',
        'label-partner-timezone': '상대방 시간대:'
    },
    'en': {
        'header-title': 'Now and Us',
        'header-subtitle': 'A space for long-distance couples',
        'anniversary-title': 'Time Since We Met',
        'anniversary-text-before': "We've been in love for",
        'anniversary-text-after': 'days.',
        'countdown-title': 'Time Until We Meet Again',
        'countdown-text-before': 'Only',
        'countdown-text-after': 'left!',
        'world-clock-title': 'Our Local Times',
        'my-time-label': 'My Time',
        'partner-time-label': "Partner's Time",
        'footer-text': 'Made with ❤️ for long-distance lovers',
        'met-message': "We've met!",
        'days-unit': 'd',
        'hours-unit': 'h',
        'minutes-unit': 'm',
        'seconds-unit': 's',
        'settings-button': 'Change Date',
        'label-anniversary': 'Anniversary:',
        'label-meeting': 'Next Meeting:',
        'label-timezone': 'Meeting Timezone:',
        'timezone-info': 'Target Timezone:',
        'change-partner-tz': 'Set Timezone',
        'label-partner-timezone': "Partner's Timezone:"
    }
};

let currentLanguage = localStorage.getItem('language') || 'ko';
let anniversaryDate = localStorage.getItem('anniversaryDate') || '2022-01-01';
let nextMeetingDate = localStorage.getItem('nextMeetingDate') || '2024-12-25T12:00';
let meetingTimezone = localStorage.getItem('meetingTimezone') || Intl.DateTimeFormat().resolvedOptions().timeZone;
let partnerTimezone = localStorage.getItem('partnerTimezone') || 'America/New_York';

function toggleMiniSettings(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function saveSettings() {
    anniversaryDate = document.getElementById('input-anniversary').value;
    nextMeetingDate = document.getElementById('input-meeting').value;
    meetingTimezone = document.getElementById('input-timezone').value;
    partnerTimezone = document.getElementById('input-partner-timezone').value;

    localStorage.setItem('anniversaryDate', anniversaryDate);
    localStorage.setItem('nextMeetingDate', nextMeetingDate);
    localStorage.setItem('meetingTimezone', meetingTimezone);
    localStorage.setItem('partnerTimezone', partnerTimezone);

    updateDisplays();
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

    updateDisplays();
}

function updateDisplays() {
    updateDaysTogether();
    updateCountdown();
    updateClocks();
    document.getElementById('display-timezone').textContent = meetingTimezone;
    document.getElementById('my-tz').textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('partner-tz').textContent = partnerTimezone;
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
    const targetUTC = convertToUTC(nextMeetingDate, meetingTimezone);
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

function updateClocks() {
    const now = new Date();
    
    // My Time
    const myOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('my-time').textContent = now.toLocaleTimeString([], myOptions);

    // Partner's Time
    const partnerOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false, 
        timeZone: partnerTimezone 
    };
    try {
        document.getElementById('partner-time').textContent = now.toLocaleTimeString([], partnerOptions);
    } catch (e) {
        document.getElementById('partner-time').textContent = "Error TZ";
    }
}

function convertToUTC(dateStr, tz) {
    const date = new Date(dateStr);
    const invDate = new Date(date.toLocaleString('en-US', { timeZone: tz }));
    const diff = date.getTime() - invDate.getTime();
    return date.getTime() + diff;
}

function populateTimezones() {
    const tzs = [
        "UTC", "Asia/Seoul", "Asia/Tokyo", "Asia/Shanghai", "Asia/Singapore", 
        "Europe/London", "Europe/Paris", "Europe/Berlin", 
        "America/New_York", "America/Chicago", "America/Los_Angeles", 
        "Australia/Sydney", "Pacific/Auckland"
    ];
    
    const selects = [document.getElementById('input-timezone'), document.getElementById('input-partner-timezone')];
    
    selects.forEach(select => {
        const currentVal = (select.id === 'input-timezone') ? meetingTimezone : partnerTimezone;
        if (!tzs.includes(currentVal)) tzs.push(currentVal);
        
        tzs.sort().forEach(tz => {
            const opt = document.createElement('option');
            opt.value = tz;
            opt.textContent = tz;
            if (tz === currentVal) opt.selected = true;
            select.appendChild(opt);
        });
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('input-anniversary').value = anniversaryDate;
    document.getElementById('input-meeting').value = nextMeetingDate;
    
    populateTimezones();
    setLanguage(currentLanguage);
    
    setInterval(() => {
        updateCountdown();
        updateClocks();
    }, 1000);
});