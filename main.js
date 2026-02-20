// Set the date of the anniversary
const anniversaryDate = new Date('2022-01-01');

// Set the date of the next meeting
const nextMeetingDate = new Date('2024-12-25');

// Translation data
const translations = {
    'ko': {
        'header-title': 'LDR Love',
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
        'seconds-unit': '초'
    },
    'en': {
        'header-title': 'LDR Love',
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
        'seconds-unit': 's'
    }
};

let currentLanguage = localStorage.getItem('language') || 'ko';

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
    const differenceInTime = today.getTime() - anniversaryDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    document.getElementById('days-together').textContent = differenceInDays;
}

function updateCountdown() {
    const today = new Date();
    const differenceInTime = nextMeetingDate.getTime() - today.getTime();
    const timerElement = document.getElementById('countdown-timer');

    if (differenceInTime > 0) {
        const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);

        const d = translations[currentLanguage]['days-unit'];
        const h = translations[currentLanguage]['hours-unit'];
        const m = translations[currentLanguage]['minutes-unit'];
        const s = translations[currentLanguage]['seconds-unit'];

        timerElement.textContent = `${days}${d} ${hours}${h} ${minutes}${m} ${seconds}${s}`;
    } else {
        timerElement.textContent = translations[currentLanguage]['met-message'];
    }
}

// Update the counters when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    
    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});