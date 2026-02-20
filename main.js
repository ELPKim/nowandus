// Comprehensive Location Data with Coordinates for Weather
const locationData = {
    "South Korea": [
        { name: "Incheon (ICN)", tz: "Asia/Seoul", lat: 37.4602, lon: 126.4407 },
        { name: "Seoul/Gimpo (GMP)", tz: "Asia/Seoul", lat: 37.5583, lon: 126.7906 },
        { name: "Busan (PUS)", tz: "Asia/Seoul", lat: 35.1796, lon: 129.0756 },
        { name: "Jeju (CJU)", tz: "Asia/Seoul", lat: 33.5113, lon: 126.4930 },
        { name: "Daegu (TAE)", tz: "Asia/Seoul", lat: 35.8714, lon: 128.6014 }
    ],
    "USA": [
        { name: "New York (JFK)", tz: "America/New_York", lat: 40.6413, lon: -73.7781 },
        { name: "Los Angeles (LAX)", tz: "America/Los_Angeles", lat: 33.9416, lon: -118.4085 },
        { name: "Chicago (ORD)", tz: "America/Chicago", lat: 41.9742, lon: -87.9073 },
        { name: "Atlanta (ATL)", tz: "America/New_York", lat: 33.6407, lon: -84.4277 },
        { name: "Dallas (DFW)", tz: "America/Chicago", lat: 32.8998, lon: -97.0403 },
        { name: "San Francisco (SFO)", tz: "America/Los_Angeles", lat: 37.6213, lon: -122.3790 },
        { name: "Miami (MIA)", tz: "America/New_York", lat: 25.7959, lon: -80.2870 },
        { name: "Seattle (SEA)", tz: "America/Los_Angeles", lat: 47.4502, lon: -122.3088 },
        { name: "El Paso (ELP)", tz: "America/Denver", lat: 31.8066, lon: -106.3778 },
        { name: "Honolulu (HNL)", tz: "Pacific/Honolulu", lat: 21.3156, lon: -157.9242 },
        { name: "Las Vegas (LAS)", tz: "America/Los_Angeles", lat: 36.0840, lon: -115.1537 },
        { name: "Boston (BOS)", tz: "America/New_York", lat: 42.3656, lon: -71.0096 }
    ],
    "Japan": [
        { name: "Tokyo Narita (NRT)", tz: "Asia/Tokyo", lat: 35.7720, lon: 140.3929 },
        { name: "Tokyo Haneda (HND)", tz: "Asia/Tokyo", lat: 35.5494, lon: 139.7798 },
        { name: "Osaka (KIX)", tz: "Asia/Tokyo", lat: 34.4320, lon: 135.2304 },
        { name: "Fukuoka (FUK)", tz: "Asia/Tokyo", lat: 33.5859, lon: 130.4507 },
        { name: "Sapporo (CTS)", tz: "Asia/Tokyo", lat: 42.7752, lon: 141.6923 },
        { name: "Okinawa (OKA)", tz: "Asia/Tokyo", lat: 26.2064, lon: 127.6465 }
    ],
    "United Kingdom": [
        { name: "London Heathrow (LHR)", tz: "Europe/London", lat: 51.4700, lon: -0.4543 },
        { name: "London Gatwick (LGW)", tz: "Europe/London", lat: 51.1537, lon: -0.1821 },
        { name: "Manchester (MAN)", tz: "Europe/London", lat: 53.3588, lon: -2.2727 },
        { name: "Edinburgh (EDI)", tz: "Europe/London", lat: 55.9508, lon: -3.3615 }
    ],
    "France": [
        { name: "Paris (CDG)", tz: "Europe/Paris", lat: 49.0097, lon: 2.5479 },
        { name: "Paris Orly (ORY)", tz: "Europe/Paris", lat: 48.7262, lon: 2.3652 },
        { name: "Nice (NCE)", tz: "Europe/Paris", lat: 43.6653, lon: 7.2150 },
        { name: "Lyon (LYS)", tz: "Europe/Paris", lat: 45.7256, lon: 5.0811 }
    ],
    "Germany": [
        { name: "Frankfurt (FRA)", tz: "Europe/Berlin", lat: 50.0379, lon: 8.5622 },
        { name: "Munich (MUC)", tz: "Europe/Berlin", lat: 48.3537, lon: 11.7750 },
        { name: "Berlin (BER)", tz: "Europe/Berlin", lat: 52.3667, lon: 13.5033 },
        { name: "Hamburg (HAM)", tz: "Europe/Berlin", lat: 53.6304, lon: 9.9882 }
    ],
    "Canada": [
        { name: "Toronto (YYZ)", tz: "America/Toronto", lat: 43.6777, lon: -79.6248 },
        { name: "Vancouver (YVR)", tz: "America/Vancouver", lat: 49.1967, lon: -123.1815 },
        { name: "Montreal (YUL)", tz: "America/Toronto", lat: 45.4657, lon: -73.7455 },
        { name: "Calgary (YYC)", tz: "America/Edmonton", lat: 51.1139, lon: -114.0203 }
    ],
    "Australia": [
        { name: "Sydney (SYD)", tz: "Australia/Sydney", lat: -33.9399, lon: 151.1753 },
        { name: "Melbourne (MEL)", tz: "Australia/Melbourne", lat: -37.6690, lon: 144.8410 },
        { name: "Brisbane (BNE)", tz: "Australia/Brisbane", lat: -27.3942, lon: 153.1218 },
        { name: "Perth (PER)", tz: "Australia/Perth", lat: -31.9385, lon: 115.9672 }
    ],
    "China": [
        { name: "Beijing (PEK)", tz: "Asia/Shanghai", lat: 40.0799, lon: 116.6031 },
        { name: "Shanghai (PVG)", tz: "Asia/Shanghai", lat: 31.1443, lon: 121.8083 },
        { name: "Guangzhou (CAN)", tz: "Asia/Shanghai", lat: 23.3924, lon: 113.2988 },
        { name: "Shenzhen (SZX)", tz: "Asia/Shanghai", lat: 22.6393, lon: 113.8107 }
    ],
    "Singapore": [{ name: "Changi (SIN)", tz: "Asia/Singapore", lat: 1.3644, lon: 103.9915 }],
    "Others": [{ name: "UTC/GMT", tz: "UTC", lat: 0, lon: 0 }]
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
        'weather-title': '우리의 오늘 날씨',
        'my-weather-label': '내가 있는 곳은',
        'partner-weather-label': '네가 있는 곳은',
        'weather-update-text': '실시간 날씨 정보를 가져오고 있어요...',
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
        'timezone-info': '우리가 만날 곳:'
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
        'weather-title': 'Our Weather Today',
        'my-weather-label': 'Where I am',
        'partner-weather-label': 'Where you are',
        'weather-update-text': 'Fetching live weather updates...',
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
        'timezone-info': 'Where we meet:'
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
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    updateDisplays();
}

async function fetchWeather(lat, lon, elementId) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await response.json();
        const weather = data.current_weather;
        const temp = Math.round(weather.temperature);
        const code = weather.weathercode;
        
        const desc = getWeatherDescription(code);
        const icon = getWeatherIcon(code);
        
        document.getElementById(elementId).innerHTML = `
            <div class="temp">${temp}°C</div>
            <div class="desc">${icon} ${desc}</div>
        `;
    } catch (e) {
        document.getElementById(elementId).textContent = "---";
    }
}

function getWeatherIcon(code) {
    if (code <= 1) return "☀️";
    if (code <= 3) return "☁️";
    if (code <= 48) return "🌫️";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "❄️";
    if (code <= 82) return "🌦️";
    if (code <= 99) return "⛈️";
    return "✨";
}

function getWeatherDescription(code) {
    const descs = {
        0: "Clear", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
        45: "Fog", 48: "Depositing Rime Fog", 51: "Light Drizzle",
        61: "Slight Rain", 71: "Slight Snow", 95: "Thunderstorm"
    };
    return descs[code] || "Cloudy";
}

async function updateWeather() {
    // 1. Get My Location Weather (Auto-detect)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            fetchWeather(pos.coords.latitude, pos.coords.longitude, 'my-weather-info');
        }, () => {
            // Fallback to SEOUL if denied
            fetchWeather(37.5665, 126.9780, 'my-weather-info');
        });
    }

    // 2. Get Partner Location Weather
    const partnerData = locationData[partnerCountry]?.find(l => l.name === partnerLocation);
    if (partnerData) {
        fetchWeather(partnerData.lat, partnerData.lon, 'partner-weather-info');
    }
}

function updateDisplays() {
    updateDaysTogether();
    updateCountdown();
    updateClocks();
    updateWeather();
    
    const myTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let myLocationLabel = myTz;
    for (const [country, locations] of Object.entries(locationData)) {
        const match = locations.find(loc => loc.tz === myTz);
        if (match) { myLocationLabel = `${country}, ${match.name.split(' (')[0]}`; break; }
    }
    
    document.getElementById('display-location').textContent = `${meetingCountry}, ${meetingAirport}`;
    document.getElementById('my-tz').textContent = myLocationLabel;
    document.getElementById('partner-tz').textContent = `${partnerCountry}, ${partnerLocation}`;
}

function updateDaysTogether() {
    const today = new Date();
    const anniv = new Date(anniversaryDate);
    const diff = Math.floor((today.getTime() - anniv.getTime()) / (1000 * 3600 * 24));
    document.getElementById('days-together').textContent = Math.max(0, diff);
}

function updateCountdown() {
    const targetUTC = convertToUTC(nextMeetingDate, meetingTimezone);
    const remaining = targetUTC - new Date().getTime();
    const timer = document.getElementById('countdown-timer');
    if (remaining > 0) {
        const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((remaining % (1000 * 60)) / 1000);
        const units = translations[currentLanguage];
        timer.textContent = `${d}${units['days-unit']} ${h}${units['hours-unit']} ${m}${units['minutes-unit']} ${s}${units['seconds-unit']}`;
    } else {
        timer.textContent = translations[currentLanguage]['met-message'];
    }
}

function updateClocks() {
    const now = new Date();
    document.getElementById('my-time').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    try {
        document.getElementById('partner-time').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: partnerTimezone });
    } catch (e) { document.getElementById('partner-time').textContent = "TZ Error"; }
}

function convertToUTC(dateStr, tz) {
    const date = new Date(dateStr);
    const invDate = new Date(date.toLocaleString('en-US', { timeZone: tz }));
    return date.getTime() + (date.getTime() - invDate.getTime());
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
            opt.value = ap.tz; opt.textContent = ap.name;
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
            opt.value = ap.tz; opt.textContent = ap.name;
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
            opt.value = country; opt.textContent = country;
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
    setInterval(() => { updateCountdown(); updateClocks(); }, 1000);
    setInterval(updateWeather, 30 * 60 * 1000); // 30 mins weather sync
});