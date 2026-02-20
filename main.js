// Comprehensive Location Data
const locationData = {
    "South Korea": [
        { name: "Incheon (ICN)", tz: "Asia/Seoul" },
        { name: "Seoul/Gimpo (GMP)", tz: "Asia/Seoul" },
        { name: "Busan (PUS)", tz: "Asia/Seoul" },
        { name: "Jeju (CJU)", tz: "Asia/Seoul" },
        { name: "Daegu (TAE)", tz: "Asia/Seoul" }
    ],
    "USA": [
        { name: "New York (JFK)", tz: "America/New_York" },
        { name: "Los Angeles (LAX)", tz: "America/Los_Angeles" },
        { name: "Chicago (ORD)", tz: "America/Chicago" },
        { name: "Atlanta (ATL)", tz: "America/New_York" },
        { name: "Dallas (DFW)", tz: "America/Chicago" },
        { name: "San Francisco (SFO)", tz: "America/Los_Angeles" },
        { name: "Miami (MIA)", tz: "America/New_York" },
        { name: "Seattle (SEA)", tz: "America/Los_Angeles" },
        { name: "El Paso (ELP)", tz: "America/Denver" },
        { name: "Honolulu (HNL)", tz: "Pacific/Honolulu" },
        { name: "Las Vegas (LAS)", tz: "America/Los_Angeles" },
        { name: "Boston (BOS)", tz: "America/New_York" }
    ],
    "Japan": [
        { name: "Tokyo Narita (NRT)", tz: "Asia/Tokyo" },
        { name: "Tokyo Haneda (HND)", tz: "Asia/Tokyo" },
        { name: "Osaka (KIX)", tz: "Asia/Tokyo" },
        { name: "Fukuoka (FUK)", tz: "Asia/Tokyo" },
        { name: "Sapporo (CTS)", tz: "Asia/Tokyo" },
        { name: "Okinawa (OKA)", tz: "Asia/Tokyo" }
    ],
    "United Kingdom": [
        { name: "London Heathrow (LHR)", tz: "Europe/London" },
        { name: "London Gatwick (LGW)", tz: "Europe/London" },
        { name: "Manchester (MAN)", tz: "Europe/London" },
        { name: "Edinburgh (EDI)", tz: "Europe/London" }
    ],
    "France": [
        { name: "Paris (CDG)", tz: "Europe/Paris" },
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
        { name: "Beijing (PEK)", tz: "Asia/Shanghai" },
        { name: "Shanghai (PVG)", tz: "Asia/Shanghai" },
        { name: "Guangzhou (CAN)", tz: "Asia/Shanghai" },
        { name: "Shenzhen (SZX)", tz: "Asia/Shanghai" }
    ],
    "Taiwan": [
        { name: "Taipei (TPE)", tz: "Asia/Taipei" },
        { name: "Kaohsiung (KHH)", tz: "Asia/Taipei" }
    ],
    "Singapore": [{ name: "Changi (SIN)", tz: "Asia/Singapore" }],
    "Thailand": [
        { name: "Bangkok (BKK)", tz: "Asia/Bangkok" },
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
    "Italy": [
        { name: "Rome (FCO)", tz: "Europe/Rome" },
        { name: "Milan (MXP)", tz: "Europe/Rome" }
    ],
    "Spain": [
        { name: "Madrid (MAD)", tz: "Europe/Madrid" },
        { name: "Barcelona (BCN)", tz: "Europe/Madrid" }
    ],
    "Netherlands": [{ name: "Amsterdam (AMS)", tz: "Europe/Amsterdam" }],
    "Switzerland": [{ name: "Zurich (ZRH)", tz: "Europe/Zurich" }],
    "India": [
        { name: "Delhi (DEL)", tz: "Asia/Kolkata" },
        { name: "Mumbai (BOM)", tz: "Asia/Kolkata" }
    ],
    "Brazil": [{ name: "Sao Paulo (GRU)", tz: "America/Sao_Paulo" }],
    "Mexico": [{ name: "Mexico City (MEX)", tz: "America/Mexico_City" }],
    "Russia": [{ name: "Moscow (SVO)", tz: "Europe/Moscow" }],
    "South Africa": [{ name: "Johannesburg (JNB)", tz: "Africa/Johannesburg" }],
    "New Zealand": [{ name: "Auckland (AKL)", tz: "Pacific/Auckland" }],
    "Others": [{ name: "UTC/GMT", tz: "UTC" }]
};

// Translation data
const translations = {
    'ko': {
        'header-title': 'Now and Us',
        'header-subtitle': '멀리 있어도 마음은 곁에, 장거리 연애를 위한 따뜻한 기록',
        'anniversary-title': '우리가 사랑한 지',
        'anniversary-text-before': '함께한 지 어느덧',
        'anniversary-text-after': '일이 되었어요.',
        'countdown-title': '다시 마주 보게 될 날',
        'countdown-text-before': '설레는 마음으로',
        'countdown-text-after': '만남을 기다려요.',
        'world-clock-title': '다른 공간, 연결된 시간',
        'my-time-label': '지금 여기, 나의 시간',
        'partner-time-label': '그곳에 있는 너의 시간',
        'footer-text': '먼 거리를 사랑으로 채워가는 모든 분들을 응원합니다 ❤️',
        'met-message': '드디어 만났어요!',
        'days-unit': '일',
        'hours-unit': '시간',
        'minutes-unit': '분',
        'seconds-unit': '초',
        'settings-button': '기록 수정하기',
        'label-anniversary': '처음 만난 날:',
        'label-meeting': '다시 만날 날:',
        'label-country': '나라:',
        'label-airport': '공항:',
        'label-location': '위치:',
        'timezone-info': '우리가 만날 곳:',
        'change-partner-tz': '너의 위치는?',
        'label-partner-timezone': '상대방 시간대:'
    },
    'en': {
        'header-title': 'Now and Us',
        'header-subtitle': 'Distance is just a test of how far love can travel.',
        'anniversary-title': 'Our Love Journey',
        'anniversary-text-before': "It has been",
        'anniversary-text-after': "beautiful days together.",
        'countdown-title': 'Until We Meet Again',
        'countdown-text-before': 'Only',
        'countdown-text-after': 'left until your hug!',
        'world-clock-title': 'Two Places, One Connection',
        'my-time-label': 'My Time Here',
        'partner-time-label': "Your Time There",
        'footer-text': 'Celebrating every mile covered by love ❤️',
        'met-message': "Finally together!",
        'days-unit': 'd',
        'hours-unit': 'h',
        'minutes-unit': 'm',
        'seconds-unit': 's',
        'settings-button': 'Edit Memories',
        'label-anniversary': 'First Day:',
        'label-meeting': 'Next Meeting:',
        'label-country': 'Country:',
        'label-airport': 'Airport:',
        'label-location': 'Location:',
        'timezone-info': 'Where we meet:',
        'change-partner-tz': 'Sync Your Time',
        'label-partner-timezone': "Partner's Location:"
    }
};

let currentLanguage = localStorage.getItem('language') || 'ko';
let anniversaryDate = localStorage.getItem('anniversaryDate') || '2022-01-01';
let nextMeetingDate = localStorage.getItem('nextMeetingDate') || '2024-12-25T12:00';

let meetingCountry = localStorage.getItem('meetingCountry') || 'South Korea';
let meetingAirport = localStorage.getItem('meetingAirport') || "Incheon (ICN)";
let meetingTimezone = localStorage.getItem('meetingTimezone') || 'Asia/Seoul';

let partnerCountry = localStorage.getItem('partnerCountry') || 'USA';
let partnerLocation = localStorage.getItem('partnerLocation') || "New York (JFK)";
let partnerTimezone = localStorage.getItem('partnerTimezone') || 'America/New_York';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
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
    
    const myTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let myLocationLabel = myTz;
    
    for (const [country, locations] of Object.entries(locationData)) {
        const match = locations.find(loc => loc.tz === myTz);
        if (match) {
            myLocationLabel = `${country}, ${match.name.split(' (')[0]}`;
            break;
        }
    }
    
    document.getElementById('display-location').textContent = `${meetingCountry}, ${meetingAirport}`;
    document.getElementById('my-tz').textContent = myLocationLabel;
    document.getElementById('partner-tz').textContent = `${partnerCountry}, ${partnerLocation}`;
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

function toggleMiniSettings(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function saveSettings() {
    anniversaryDate = document.getElementById('input-anniversary').value;
    nextMeetingDate = document.getElementById('input-meeting').value;
    
    meetingCountry = document.getElementById('input-country').value;
    const airportSelect = document.getElementById('input-airport');
    if (airportSelect.selectedIndex >= 0) {
        meetingAirport = airportSelect.options[airportSelect.selectedIndex].text;
        meetingTimezone = airportSelect.value;
    }

    partnerCountry = document.getElementById('input-partner-country').value;
    const partnerLocSelect = document.getElementById('input-partner-location');
    if (partnerLocSelect.selectedIndex >= 0) {
        partnerLocation = partnerLocSelect.options[partnerLocSelect.selectedIndex].text;
        partnerTimezone = partnerLocSelect.value;
    }

    localStorage.setItem('anniversaryDate', anniversaryDate);
    localStorage.setItem('nextMeetingDate', nextMeetingDate);
    localStorage.setItem('meetingCountry', meetingCountry);
    localStorage.setItem('meetingAirport', meetingAirport);
    localStorage.setItem('meetingTimezone', meetingTimezone);
    localStorage.setItem('partnerCountry', partnerCountry);
    localStorage.setItem('partnerLocation', partnerLocation);
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

function updatePartnerLocationList() {
    const country = document.getElementById('input-partner-country').value;
    const locSelect = document.getElementById('input-partner-location');
    locSelect.innerHTML = '';

    if (locationData[country]) {
        locationData[country].forEach(ap => {
            const opt = document.createElement('option');
            opt.value = ap.tz;
            opt.textContent = ap.name;
            if (ap.name === partnerLocation) opt.selected = true;
            locSelect.appendChild(opt);
        });
    }
    saveSettings();
}

function initializeForm() {
    const countries = Object.keys(locationData).sort();
    const countrySelect = document.getElementById('input-country');
    const partnerCountrySelect = document.getElementById('input-partner-country');
    
    [countrySelect, partnerCountrySelect].forEach(select => {
        select.innerHTML = '';
        countries.forEach(country => {
            const opt = document.createElement('option');
            opt.value = country;
            opt.textContent = country;
            if (select.id === 'input-country' && country === meetingCountry) opt.selected = true;
            if (select.id === 'input-partner-country' && country === partnerCountry) opt.selected = true;
            select.appendChild(opt);
        });
    });

    updateAirportList();
    updatePartnerLocationList();
}

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