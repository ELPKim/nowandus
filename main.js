// Comprehensive Location Data
const locationData = {
    "South Korea": [
        { name: "Incheon Int'l (ICN)", tz: "Asia/Seoul" },
        { name: "Gimpo Int'l (GMP)", tz: "Asia/Seoul" },
        { name: "Busan/Gimhae (PUS)", tz: "Asia/Seoul" },
        { name: "Jeju Int'l (CJU)", tz: "Asia/Seoul" },
        { name: "Daegu (TAE)", tz: "Asia/Seoul" },
        { name: "Cheongju (CJJ)", tz: "Asia/Seoul" },
        { name: "Gwangju (KWJ)", tz: "Asia/Seoul" },
        { name: "Ulsan (USN)", tz: "Asia/Seoul" }
    ],
    "USA": [
        { name: "Atlanta (ATL)", tz: "America/New_York" },
        { name: "New York (JFK)", tz: "America/New_York" },
        { name: "New York (LGA)", tz: "America/New_York" },
        { name: "Newark (EWR)", tz: "America/New_York" },
        { name: "Los Angeles (LAX)", tz: "America/Los_Angeles" },
        { name: "Chicago (ORD)", tz: "America/Chicago" },
        { name: "Dallas/Fort Worth (DFW)", tz: "America/Chicago" },
        { name: "Denver (DEN)", tz: "America/Denver" },
        { name: "San Francisco (SFO)", tz: "America/Los_Angeles" },
        { name: "Seattle/Tacoma (SEA)", tz: "America/Los_Angeles" },
        { name: "Las Vegas (LAS)", tz: "America/Los_Angeles" },
        { name: "Orlando (MCO)", tz: "America/New_York" },
        { name: "Miami (MIA)", tz: "America/New_York" },
        { name: "Phoenix (PHX)", tz: "America/Phoenix" },
        { name: "Houston (IAH)", tz: "America/Chicago" },
        { name: "Boston (BOS)", tz: "America/New_York" },
        { name: "Minneapolis (MSP)", tz: "America/Chicago" },
        { name: "Detroit (DTW)", tz: "America/New_York" },
        { name: "Philadelphia (PHL)", tz: "America/New_York" },
        { name: "Washington Dulles (IAD)", tz: "America/New_York" },
        { name: "Salt Lake City (SLC)", tz: "America/Denver" },
        { name: "El Paso (ELP)", tz: "America/Denver" },
        { name: "Honolulu (HNL)", tz: "Pacific/Honolulu" },
        { name: "Anchorage (ANC)", tz: "America/Anchorage" }
    ],
    "Japan": [
        { name: "Tokyo Narita (NRT)", tz: "Asia/Tokyo" },
        { name: "Tokyo Haneda (HND)", tz: "Asia/Tokyo" },
        { name: "Osaka Kansai (KIX)", tz: "Asia/Tokyo" },
        { name: "Osaka Itami (ITM)", tz: "Asia/Tokyo" },
        { name: "Fukuoka (FUK)", tz: "Asia/Tokyo" },
        { name: "Sapporo (CTS)", tz: "Asia/Tokyo" },
        { name: "Nagoya (NGO)", tz: "Asia/Tokyo" },
        { name: "Okinawa (OKA)", tz: "Asia/Tokyo" }
    ],
    "United Kingdom": [
        { name: "London Heathrow (LHR)", tz: "Europe/London" },
        { name: "London Gatwick (LGW)", tz: "Europe/London" },
        { name: "London Stansted (STN)", tz: "Europe/London" },
        { name: "Manchester (MAN)", tz: "Europe/London" },
        { name: "Edinburgh (EDI)", tz: "Europe/London" },
        { name: "Birmingham (BHX)", tz: "Europe/London" },
        { name: "Glasgow (GLA)", tz: "Europe/London" }
    ],
    "France": [
        { name: "Paris CDG (CDG)", tz: "Europe/Paris" },
        { name: "Paris Orly (ORY)", tz: "Europe/Paris" },
        { name: "Nice (NCE)", tz: "Europe/Paris" },
        { name: "Lyon (LYS)", tz: "Europe/Paris" },
        { name: "Marseille (MRS)", tz: "Europe/Paris" },
        { name: "Toulouse (TLS)", tz: "Europe/Paris" }
    ],
    "Germany": [
        { name: "Frankfurt (FRA)", tz: "Europe/Berlin" },
        { name: "Munich (MUC)", tz: "Europe/Berlin" },
        { name: "Berlin (BER)", tz: "Europe/Berlin" },
        { name: "Dusseldorf (DUS)", tz: "Europe/Berlin" },
        { name: "Hamburg (HAM)", tz: "Europe/Berlin" },
        { name: "Stuttgart (STR)", tz: "Europe/Berlin" }
    ],
    "Canada": [
        { name: "Toronto Pearson (YYZ)", tz: "America/Toronto" },
        { name: "Vancouver (YVR)", tz: "America/Vancouver" },
        { name: "Montreal (YUL)", tz: "America/Toronto" },
        { name: "Calgary (YYC)", tz: "America/Edmonton" },
        { name: "Ottawa (YOW)", tz: "America/Toronto" },
        { name: "Edmonton (YEG)", tz: "America/Edmonton" }
    ],
    "Australia": [
        { name: "Sydney (SYD)", tz: "Australia/Sydney" },
        { name: "Melbourne (MEL)", tz: "Australia/Melbourne" },
        { name: "Brisbane (BNE)", tz: "Australia/Brisbane" },
        { name: "Perth (PER)", tz: "Australia/Perth" },
        { name: "Adelaide (ADL)", tz: "Australia/Adelaide" },
        { name: "Gold Coast (OOL)", tz: "Australia/Brisbane" }
    ],
    "China": [
        { name: "Beijing Capital (PEK)", tz: "Asia/Shanghai" },
        { name: "Beijing Daxing (PKX)", tz: "Asia/Shanghai" },
        { name: "Shanghai Pudong (PVG)", tz: "Asia/Shanghai" },
        { name: "Shanghai Hongqiao (SHA)", tz: "Asia/Shanghai" },
        { name: "Guangzhou (CAN)", tz: "Asia/Shanghai" },
        { name: "Shenzhen (SZX)", tz: "Asia/Shanghai" },
        { name: "Chengdu (CTU)", tz: "Asia/Shanghai" }
    ],
    "Singapore": [{ name: "Changi (SIN)", tz: "Asia/Singapore" }],
    "Taiwan": [
        { name: "Taipei Taoyuan (TPE)", tz: "Asia/Taipei" },
        { name: "Taipei Songshan (TSA)", tz: "Asia/Taipei" },
        { name: "Kaohsiung (KHH)", tz: "Asia/Taipei" }
    ],
    "Thailand": [
        { name: "Bangkok Suvarnabhumi (BKK)", tz: "Asia/Bangkok" },
        { name: "Bangkok Don Mueang (DMK)", tz: "Asia/Bangkok" },
        { name: "Phuket (HKT)", tz: "Asia/Bangkok" },
        { name: "Chiang Mai (CNX)", tz: "Asia/Bangkok" }
    ],
    "Vietnam": [
        { name: "Ho Chi Minh City (SGN)", tz: "Asia/Ho_Chi_Minh" },
        { name: "Hanoi (HAN)", tz: "Asia/Ho_Chi_Minh" },
        { name: "Da Nang (DAD)", tz: "Asia/Ho_Chi_Minh" }
    ],
    "United Arab Emirates": [
        { name: "Dubai (DXB)", tz: "Asia/Dubai" },
        { name: "Abu Dhabi (AUH)", tz: "Asia/Dubai" }
    ],
    "Turkey": [
        { name: "Istanbul (IST)", tz: "Europe/Istanbul" },
        { name: "Istanbul Sabiha Gökçen (SAW)", tz: "Europe/Istanbul" },
        { name: "Antalya (AYT)", tz: "Europe/Istanbul" }
    ],
    "Italy": [
        { name: "Rome Fiumicino (FCO)", tz: "Europe/Rome" },
        { name: "Milan Malpensa (MXP)", tz: "Europe/Rome" },
        { name: "Venice (VCE)", tz: "Europe/Rome" }
    ],
    "Spain": [
        { name: "Madrid Barajas (MAD)", tz: "Europe/Madrid" },
        { name: "Barcelona (BCN)", tz: "Europe/Madrid" },
        { name: "Palma de Mallorca (PMI)", tz: "Europe/Madrid" }
    ],
    "Netherlands": [{ name: "Amsterdam Schiphol (AMS)", tz: "Europe/Amsterdam" }],
    "Switzerland": [
        { name: "Zurich (ZRH)", tz: "Europe/Zurich" },
        { name: "Geneva (GVA)", tz: "Europe/Zurich" }
    ],
    "India": [
        { name: "Delhi (DEL)", tz: "Asia/Kolkata" },
        { name: "Mumbai (BOM)", tz: "Asia/Kolkata" },
        { name: "Bangalore (BLR)", tz: "Asia/Kolkata" }
    ],
    "Brazil": [
        { name: "Sao Paulo (GRU)", tz: "America/Sao_Paulo" },
        { name: "Rio de Janeiro (GIG)", tz: "America/Sao_Paulo" }
    ],
    "Mexico": [
        { name: "Mexico City (MEX)", tz: "America/Mexico_City" },
        { name: "Cancun (CUN)", tz: "America/Cancun" }
    ],
    "Philippines": [
        { name: "Manila (MNL)", tz: "Asia/Manila" },
        { name: "Cebu (CEB)", tz: "Asia/Manila" }
    ],
    "Indonesia": [
        { name: "Jakarta (CGK)", tz: "Asia/Jakarta" },
        { name: "Bali (DPS)", tz: "Asia/Makassar" }
    ],
    "Malaysia": [
        { name: "Kuala Lumpur (KUL)", tz: "Asia/Kuala_Lumpur" },
        { name: "Kota Kinabalu (BKI)", tz: "Asia/Kuching" }
    ],
    "Others": [
        { name: "UTC/GMT", tz: "UTC" },
        { name: "Qatar/Doha (DOH)", tz: "Asia/Qatar" },
        { name: "Russia/Moscow (SVO)", tz: "Europe/Moscow" },
        { name: "South Africa/Johannesburg (JNB)", tz: "Africa/Johannesburg" },
        { name: "Egypt/Cairo (CAI)", tz: "Africa/Cairo" }
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
    if (airportSelect.selectedIndex >= 0) {
        meetingAirport = airportSelect.options[airportSelect.selectedIndex].text;
        meetingTimezone = airportSelect.value;
    }

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
    
    // Create a unique set of timezones paired with a friendly label
    let allTzOptions = [];
    Object.entries(locationData).forEach(([country, airports]) => {
        airports.forEach(ap => {
            allTzOptions.push({ tz: ap.tz, label: `${country} - ${ap.name}` });
        });
    });
    
    // Deduplicate and sort
    const uniqueTzs = [...new Map(allTzOptions.map(item => [item.tz, item])).values()];
    uniqueTzs.sort((a, b) => a.label.localeCompare(b.label)).forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.tz;
        opt.textContent = item.label;
        if (item.tz === partnerTimezone) opt.selected = true;
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