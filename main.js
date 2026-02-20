// Comprehensive Location Data
const locationData = {
    "South Korea": [
        { name: "Incheon Int'l (ICN)", tz: "Asia/Seoul" },
        { name: "Gimpo Int'l (GMP)", tz: "Asia/Seoul" },
        { name: "Busan/Gimhae (PUS)", tz: "Asia/Seoul" },
        { name: "Jeju Int'l (CJU)", tz: "Asia/Seoul" }
    ],
    "USA": [
        { name: "New York (JFK)", tz: "America/New_York" },
        { name: "Los Angeles (LAX)", tz: "America/Los_Angeles" },
        { name: "Chicago (ORD)", tz: "America/Chicago" },
        { name: "Atlanta (ATL)", tz: "America/New_York" },
        { name: "Dallas (DFW)", tz: "America/Chicago" },
        { name: "San Francisco (SFO)", tz: "America/Los_Angeles" },
        { name: "Miami (MIA)", tz: "America/New_York" },
        { name: "Seattle (SEA)", tz: "America/Los_Angeles" }
    ],
    "Japan": [
        { name: "Tokyo Narita (NRT)", tz: "Asia/Tokyo" },
        { name: "Tokyo Haneda (HND)", tz: "Asia/Tokyo" },
        { name: "Osaka Kansai (KIX)", tz: "Asia/Tokyo" },
        { name: "Fukuoka (FUK)", tz: "Asia/Tokyo" },
        { name: "Sapporo (CTS)", tz: "Asia/Tokyo" }
    ],
    "United Kingdom": [
        { name: "London Heathrow (LHR)", tz: "Europe/London" },
        { name: "London Gatwick (LGW)", tz: "Europe/London" },
        { name: "Manchester (MAN)", tz: "Europe/London" },
        { name: "Edinburgh (EDI)", tz: "Europe/London" }
    ],
    "France": [
        { name: "Paris Charles de Gaulle (CDG)", tz: "Europe/Paris" },
        { name: "Paris Orly (ORY)", tz: "Europe/Paris" },
        { name: "Nice (NCE)", tz: "Europe/Paris" },
        { name: "Lyon (LYS)", tz: "Europe/Paris" }
    ],
    "Germany": [
        { name: "Frankfurt (FRA)", tz: "Europe/Berlin" },
        { name: "Munich (MUC)", tz: "Europe/Berlin" },
        { name: "Berlin (BER)", tz: "Europe/Berlin" },
        { name: "Hamburg (HAM)", tz: "Europe/Berlin" }
    ],
    "Canada": [
        { name: "Toronto (YYZ)", tz: "America/Toronto" },
        { name: "Vancouver (YVR)", tz: "America/Vancouver" },
        { name: "Montreal (YUL)", tz: "America/Toronto" },
        { name: "Calgary (YYC)", tz: "America/Edmonton" }
    ],
    "Australia": [
        { name: "Sydney (SYD)", tz: "Australia/Sydney" },
        { name: "Melbourne (MEL)", tz: "Australia/Melbourne" },
        { name: "Brisbane (BNE)", tz: "Australia/Brisbane" },
        { name: "Perth (PER)", tz: "Australia/Perth" }
    ],
    "China": [
        { name: "Beijing Capital (PEK)", tz: "Asia/Shanghai" },
        { name: "Shanghai Pudong (PVG)", tz: "Asia/Shanghai" },
        { name: "Guangzhou (CAN)", tz: "Asia/Shanghai" },
        { name: "Shenzhen (SZX)", tz: "Asia/Shanghai" }
    ],
    "Singapore": [{ name: "Changi (SIN)", tz: "Asia/Singapore" }],
    "Taiwan": [{ name: "Taipei Taoyuan (TPE)", tz: "Asia/Taipei" }],
    "Thailand": [
        { name: "Bangkok Suvarnabhumi (BKK)", tz: "Asia/Bangkok" },
        { name: "Phuket (HKT)", tz: "Asia/Bangkok" }
    ],
    "Vietnam": [
        { name: "Ho Chi Minh City (SGN)", tz: "Asia/Ho_Chi_Minh" },
        { name: "Hanoi (HAN)", tz: "Asia/Ho_Chi_Minh" }
    ],
    "United Arab Emirates": [
        { name: "Dubai (DXB)", tz: "Asia/Dubai" },
        { name: "Abu Dhabi (AUH)", tz: "Asia/Dubai" }
    ],
    "Turkey": [
        { name: "Istanbul (IST)", tz: "Europe/Istanbul" },
        { name: "Antalya (AYT)", tz: "Europe/Istanbul" }
    ],
    "Brazil": [
        { name: "Sao Paulo (GRU)", tz: "America/Sao_Paulo" },
        { name: "Rio de Janeiro (GIG)", tz: "America/Sao_Paulo" }
    ],
    "Others": [
        { name: "UTC/GMT", tz: "UTC" },
        { name: "India (DEL)", tz: "Asia/Kolkata" },
        { name: "Italy (FCO)", tz: "Europe/Rome" },
        { name: "Spain (MAD)", tz: "Europe/Madrid" },
        { name: "Netherlands (AMS)", tz: "Europe/Amsterdam" }
    ]
};

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
        'label-country': '나라:',
        'label-airport': '공항:',
        'timezone-info': '만남 장소:',
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
        'label-country': 'Country:',
        'label-airport': 'Airport:',
        'timezone-info': 'Meeting Point:',
        'change-partner-tz': 'Set Timezone',
        'label-partner-timezone': "Partner's Timezone:"
    }
};

let currentLanguage = localStorage.getItem('language') || 'ko';
let anniversaryDate = localStorage.getItem('anniversaryDate') || '2022-01-01';
let nextMeetingDate = localStorage.getItem('nextMeetingDate') || '2024-12-25T12:00';
let meetingCountry = localStorage.getItem('meetingCountry') || 'South Korea';
let meetingAirport = localStorage.getItem('meetingAirport') || "Incheon Int'l (ICN)";
let meetingTimezone = localStorage.getItem('meetingTimezone') || 'Asia/Seoul';
let partnerTimezone = localStorage.getItem('partnerTimezone') || 'America/New_York';

function toggleMiniSettings(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function saveSettings() {
    anniversaryDate = document.getElementById('input-anniversary').value;
    nextMeetingDate = document.getElementById('input-meeting').value;
    
    meetingCountry = document.getElementById('input-country').value;
    const airportSelect = document.getElementById('input-airport');
    meetingAirport = airportSelect.options[airportSelect.selectedIndex].text;
    meetingTimezone = airportSelect.value;

    partnerTimezone = document.getElementById('input-partner-timezone').value;

    localStorage.setItem('anniversaryDate', anniversaryDate);
    localStorage.setItem('nextMeetingDate', nextMeetingDate);
    localStorage.setItem('meetingCountry', meetingCountry);
    localStorage.setItem('meetingAirport', meetingAirport);
    localStorage.setItem('meetingTimezone', meetingTimezone);
    localStorage.setItem('partnerTimezone', partnerTimezone);

    updateDisplays();
}

function updateAirportList() {
    const country = document.getElementById('input-country').value;
    const airportSelect = document.getElementById('input-airport');
    airportSelect.innerHTML = '';

    if (locationData[country]) {
        locationData[country].forEach(ap => {
            const opt = document.createElement('option');
            opt.value = ap.tz;
            opt.textContent = ap.name;
            if (ap.name === meetingAirport) opt.selected = true;
            airportSelect.appendChild(opt);
        });
    }
    saveSettings();
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
    document.getElementById('display-location').textContent = `${meetingCountry}, ${meetingAirport}`;
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
    const myOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('my-time').textContent = now.toLocaleTimeString([], myOptions);

    const partnerOptions = { 
        hour: '2-digit', minute: '2-digit', second: '2-digit', 
        hour12: false, timeZone: partnerTimezone 
    };
    try {
        document.getElementById('partner-time').textContent = now.toLocaleTimeString([], partnerOptions);
    } catch (e) {
        document.getElementById('partner-time').textContent = "TZ Error";
    }
}

function convertToUTC(dateStr, tz) {
    const date = new Date(dateStr);
    const invDate = new Date(date.toLocaleString('en-US', { timeZone: tz }));
    const diff = date.getTime() - invDate.getTime();
    return date.getTime() + diff;
}

function initializeForm() {
    const countrySelect = document.getElementById('input-country');
    countrySelect.innerHTML = '';
    
    Object.keys(locationData).sort().forEach(country => {
        const opt = document.createElement('option');
        opt.value = country;
        opt.textContent = country;
        if (country === meetingCountry) opt.selected = true;
        countrySelect.appendChild(opt);
    });

    const partnerTzSelect = document.getElementById('input-partner-timezone');
    partnerTzSelect.innerHTML = '';
    
    // Extract all unique timezones from locationData
    let allTzs = new Set();
    Object.values(locationData).flat().forEach(ap => allTzs.add(ap.tz));
    
    Array.from(allTzs).sort().forEach(tz => {
        const opt = document.createElement('option');
        opt.value = tz;
        opt.textContent = tz;
        if (tz === partnerTimezone) opt.selected = true;
        partnerTzSelect.appendChild(opt);
    });

    updateAirportList();
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('input-anniversary').value = anniversaryDate;
    document.getElementById('input-meeting').value = nextMeetingDate;
    
    initializeForm();
    setLanguage(currentLanguage);
    
    setInterval(() => {
        updateCountdown();
        updateClocks();
    }, 1000);
});