// Comprehensive Worldwide Location Data (Permanent Expansion)
const locationData = {
    "South Korea": [
        { name: "Seoul/Incheon (ICN)", tz: "Asia/Seoul", lat: 37.4602, lon: 126.4407 },
        { name: "Seoul/Gimpo (GMP)", tz: "Asia/Seoul", lat: 37.5583, lon: 126.7906 },
        { name: "Busan (PUS)", tz: "Asia/Seoul", lat: 35.1796, lon: 129.0756 },
        { name: "Jeju (CJU)", tz: "Asia/Seoul", lat: 33.5113, lon: 126.4930 },
        { name: "Daegu (TAE)", tz: "Asia/Seoul", lat: 35.8714, lon: 128.6014 },
        { name: "Cheongju (CJJ)", tz: "Asia/Seoul", lat: 36.7166, lon: 127.4958 }
    ],
    "USA": [
        { name: "New York (JFK)", tz: "America/New_York", lat: 40.6413, lon: -73.7781 },
        { name: "Los Angeles (LAX)", tz: "America/Los_Angeles", lat: 33.9416, lon: -118.4085 },
        { name: "Chicago (ORD)", tz: "America/Chicago", lat: 41.9742, lon: -87.9073 },
        { name: "Atlanta (ATL)", tz: "America/New_York", lat: 33.6407, lon: -84.4277 },
        { name: "Dallas (DFW)", tz: "America/Chicago", lat: 32.8998, lon: -97.0403 },
        { name: "San Francisco (SFO)", tz: "America/Los_Angeles", lat: 37.6213, lon: -122.3790 },
        { name: "Seattle (SEA)", tz: "America/Los_Angeles", lat: 47.4502, lon: -122.3088 },
        { name: "El Paso (ELP)", tz: "America/Denver", lat: 31.8066, lon: -106.3778 },
        { name: "Honolulu (HNL)", tz: "Pacific/Honolulu", lat: 21.3156, lon: -157.9242 },
        { name: "Miami (MIA)", tz: "America/New_York", lat: 25.7959, lon: -80.2870 },
        { name: "Las Vegas (LAS)", tz: "America/Los_Angeles", lat: 36.0840, lon: -115.1537 },
        { name: "Boston (BOS)", tz: "America/New_York", lat: 42.3656, lon: -71.0096 },
        { name: "Washington (IAD)", tz: "America/New_York", lat: 38.9531, lon: -77.4565 },
        { name: "Houston (IAH)", tz: "America/Chicago", lat: 29.9902, lon: -95.3368 }
    ],
    "Japan": [
        { name: "Tokyo Narita (NRT)", tz: "Asia/Tokyo", lat: 35.7720, lon: 140.3929 },
        { name: "Tokyo Haneda (HND)", tz: "Asia/Tokyo", lat: 35.5494, lon: 139.7798 },
        { name: "Osaka (KIX)", tz: "Asia/Tokyo", lat: 34.4320, lon: 135.2304 },
        { name: "Fukuoka (FUK)", tz: "Asia/Tokyo", lat: 33.5859, lon: 130.4507 },
        { name: "Sapporo (CTS)", tz: "Asia/Tokyo", lat: 42.7752, lon: 141.6923 },
        { name: "Okinawa (OKA)", tz: "Asia/Tokyo", lat: 26.2064, lon: 127.6465 },
        { name: "Nagoya (NGO)", tz: "Asia/Tokyo", lat: 34.8584, lon: 136.8054 }
    ],
    "United Kingdom": [
        { name: "London Heathrow (LHR)", tz: "Europe/London", lat: 51.4700, lon: -0.4543 },
        { name: "London Gatwick (LGW)", tz: "Europe/London", lat: 51.1537, lon: -0.1821 },
        { name: "Manchester (MAN)", tz: "Europe/London", lat: 53.3588, lon: -2.2727 },
        { name: "Edinburgh (EDI)", tz: "Europe/London", lat: 55.9508, lon: -3.3615 },
        { name: "Birmingham (BHX)", tz: "Europe/London", lat: 52.4539, lon: -1.7481 }
    ],
    "France": [
        { name: "Paris (CDG)", tz: "Europe/Paris", lat: 49.0097, lon: 2.5479 },
        { name: "Paris Orly (ORY)", tz: "Europe/Paris", lat: 48.7262, lon: 2.3652 },
        { name: "Nice (NCE)", tz: "Europe/Paris", lat: 43.6653, lon: 7.2150 },
        { name: "Lyon (LYS)", tz: "Europe/Paris", lat: 45.7256, lon: 5.0811 },
        { name: "Marseille (MRS)", tz: "Europe/Paris", lat: 43.4367, lon: 5.2150 }
    ],
    "Germany": [
        { name: Germany = "Frankfurt (FRA)", tz: "Europe/Berlin", lat: 50.0379, lon: 8.5622 },
        { name: "Munich (MUC)", tz: "Europe/Berlin", lat: 48.3537, lon: 11.7750 },
        { name: "Berlin (BER)", tz: "Europe/Berlin", lat: 52.3667, lon: 13.5033 },
        { name: "Hamburg (HAM)", tz: "Europe/Berlin", lat: 53.6304, lon: 9.9882 },
        { name: "Dusseldorf (DUS)", tz: "Europe/Berlin", lat: 51.2895, lon: 6.7668 }
    ],
    "Canada": [
        { name: "Toronto (YYZ)", tz: "America/Toronto", lat: 43.6777, lon: -79.6248 },
        { name: "Vancouver (YVR)", tz: "America/Vancouver", lat: 49.1967, lon: -123.1815 },
        { name: "Montreal (YUL)", tz: "America/Toronto", lat: 45.4657, lon: -73.7455 },
        { name: "Calgary (YYC)", tz: "America/Edmonton", lat: 51.1139, lon: -114.0203 },
        { name: "Ottawa (YOW)", tz: "America/Toronto", lat: 45.3225, lon: -75.6672 }
    ],
    "Australia": [
        { name: "Sydney (SYD)", tz: "Australia/Sydney", lat: -33.9399, lon: 151.1753 },
        { name: "Melbourne (MEL)", tz: "Australia/Melbourne", lat: -37.6690, lon: 144.8410 },
        { name: "Brisbane (BNE)", tz: "Australia/Brisbane", lat: -27.3942, lon: 153.1218 },
        { name: "Perth (PER)", tz: "Australia/Perth", lat: -31.9385, lon: 115.9672 },
        { name: "Adelaide (ADL)", tz: "Australia/Adelaide", lat: -34.9462, lon: 138.5404 }
    ],
    "China": [
        { name: "Beijing (PEK)", tz: "Asia/Shanghai", lat: 40.0799, lon: 116.6031 },
        { name: "Shanghai (PVG)", tz: "Asia/Shanghai", lat: 31.1443, lon: 121.8083 },
        { name: "Guangzhou (CAN)", tz: "Asia/Shanghai", lat: 23.3924, lon: 113.2988 },
        { name: "Shenzhen (SZX)", tz: "Asia/Shanghai", lat: 22.6393, lon: 113.8107 },
        { name: "Chengdu (CTU)", tz: "Asia/Shanghai", lat: 30.5785, lon: 103.9471 }
    ],
    "Italy": [
        { name: "Rome (FCO)", tz: "Europe/Rome", lat: 41.8003, lon: 12.2389 },
        { name: "Milan (MXP)", tz: "Europe/Rome", lat: 45.6301, lon: 8.7231 },
        { name: "Venice (VCE)", tz: "Europe/Rome", lat: 45.5053, lon: 12.3519 }
    ],
    "Spain": [
        { name: "Madrid (MAD)", tz: "Europe/Madrid", lat: 40.4983, lon: -3.5676 },
        { name: "Barcelona (BCN)", tz: "Europe/Madrid", lat: 41.2974, lon: 2.0833 },
        { name: "Palma (PMI)", tz: "Europe/Madrid", lat: 39.5517, lon: 2.7388 }
    ],
    "Switzerland": [
        { name: "Zurich (ZRH)", tz: "Europe/Zurich", lat: 47.4582, lon: 8.5555 },
        { name: "Geneva (GVA)", tz: "Europe/Zurich", lat: 46.2370, lon: 6.1091 }
    ],
    "Netherlands": [{ name: "Amsterdam (AMS)", tz: "Europe/Amsterdam", lat: 52.3105, lon: 4.7683 }],
    "Singapore": [{ name: "Singapore (SIN)", tz: "Asia/Singapore", lat: 1.3644, lon: 103.9915 }],
    "Taiwan": [
        { name: "Taipei (TPE)", tz: "Asia/Taipei", lat: 25.0797, lon: 121.2342 },
        { name: "Kaohsiung (KHH)", tz: "Asia/Taipei", lat: 22.5771, lon: 120.3500 }
    ],
    "Thailand": [
        { name: "Bangkok (BKK)", tz: "Asia/Bangkok", lat: 13.6900, lon: 100.7501 },
        { name: "Phuket (HKT)", tz: "Asia/Bangkok", lat: 8.1132, lon: 98.3064 },
        { name: "Chiang Mai (CNX)", tz: "Asia/Bangkok", lat: 18.7752, lon: 98.9674 }
    ],
    "Vietnam": [
        { name: "Ho Chi Minh (SGN)", tz: "Asia/Ho_Chi_Minh", lat: 10.8185, lon: 106.6588 },
        { name: "Hanoi (HAN)", tz: "Asia/Ho_Chi_Minh", lat: 21.2212, lon: 105.8072 },
        { name: "Da Nang (DAD)", tz: "Asia/Ho_Chi_Minh", lat: 16.0439, lon: 108.1994 }
    ],
    "Malaysia": [
        { name: "Kuala Lumpur (KUL)", tz: "Asia/Kuala_Lumpur", lat: 2.7456, lon: 101.7072 },
        { name: "Kota Kinabalu (BKI)", tz: "Asia/Kuching", lat: 5.9372, lon: 116.0511 }
    ],
    "Indonesia": [
        { name: "Jakarta (CGK)", tz: "Asia/Jakarta", lat: -6.1256, lon: 106.6559 },
        { name: "Bali (DPS)", tz: "Asia/Makassar", lat: -8.7482, lon: 115.1674 }
    ],
    "Philippines": [
        { name: "Manila (MNL)", tz: "Asia/Manila", lat: 14.5086, lon: 121.0194 },
        { name: "Cebu (CEB)", tz: "Asia/Manila", lat: 10.3075, lon: 123.9794 }
    ],
    "India": [
        { name: "Delhi (DEL)", tz: "Asia/Kolkata", lat: 28.5562, lon: 77.1000 },
        { name: "Mumbai (BOM)", tz: "Asia/Kolkata", lat: 19.0896, lon: 72.8656 },
        { name: "Bangalore (BLR)", tz: "Asia/Kolkata", lat: 12.9539, lon: 77.7067 }
    ],
    "UAE": [
        { name: "Dubai (DXB)", tz: "Asia/Dubai", lat: 25.2532, lon: 55.3657 },
        { name: "Abu Dhabi (AUH)", tz: "Asia/Dubai", lat: 24.4330, lon: 54.6511 }
    ],
    "Qatar": [{ name: "Doha (DOH)", tz: "Asia/Qatar", lat: 25.2731, lon: 51.6081 }],
    "Turkey": [
        { name: "Istanbul (IST)", tz: "Europe/Istanbul", lat: 41.2753, lon: 28.7519 },
        { name: "Antalya (AYT)", tz: "Europe/Istanbul", lat: 36.8987, lon: 30.8005 }
    ],
    "Russia": [
        { name: "Moscow (SVO)", tz: "Europe/Moscow", lat: 55.9726, lon: 37.4146 },
        { name: "St. Petersburg (LED)", tz: "Europe/Moscow", lat: 59.8003, lon: 30.2625 }
    ],
    "Brazil": [
        { name: "Sao Paulo (GRU)", tz: "America/Sao_Paulo", lat: -23.4356, lon: -46.4731 },
        { name: "Rio de Janeiro (GIG)", tz: "America/Sao_Paulo", lat: -22.8100, lon: -43.2505 }
    ],
    "Mexico": [
        { name: "Mexico City (MEX)", tz: "America/Mexico_City", lat: 19.4361, lon: -99.0719 },
        { name: "Cancun (CUN)", tz: "America/Cancun", lat: 21.0365, lon: -86.8771 }
    ],
    "Argentina": [{ name: "Buenos Aires (EZE)", tz: "America/Argentina/Buenos_Aires", lat: -34.8222, lon: -58.5358 }],
    "New Zealand": [
        { name: "Auckland (AKL)", tz: "Pacific/Auckland", lat: -37.0081, lon: 174.7850 },
        { name: "Christchurch (CHC)", tz: "Pacific/Auckland", lat: -43.4894, lon: 172.5322 }
    ],
    "South Africa": [{ name: "Johannesburg (JNB)", tz: "Africa/Johannesburg", lat: -26.1392, lon: 28.2460 }],
    "Egypt": [{ name: "Cairo (CAI)", tz: "Africa/Cairo", lat: 30.1219, lon: 31.4056 }],
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
        'timezone-info': '우리가 만날 곳:',
        'change-my-loc': '나의 위치는?',
        'change-partner-tz': '너의 위치는?',
        'my-loc-title': '나의 현재 위치',
        'partner-loc-title': '상대방의 현재 위치',
        'ps-header': 'Partnership',
        'ps-subtitle': 'Now and Us와 함께 따뜻한 가치를 만들어가요',
        'ps-label-name': '성함 / 회사명',
        'ps-label-email': '회신받을 이메일',
        'ps-label-subject': '문의 제목',
        'ps-label-message': '문의 내용',
        'ps-btn': '문의 보내기',
        'ps-back': '← 메인으로 돌아가기',
        'ps-name-ph': '이름을 입력해주세요',
        'ps-subject-ph': '제휴 문의 드립니다',
        'ps-message-ph': '상세한 내용을 적어주세요'
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
        'timezone-info': 'Where we meet:',
        'change-my-loc': 'Set My Location',
        'change-partner-tz': 'Set Partner Location',
        'my-loc-title': 'My Current Location',
        'partner-loc-title': "Partner's Current Location",
        'ps-header': 'Partnership',
        'ps-subtitle': 'Let\'s create warm values with Now and Us',
        'ps-label-name': 'Name / Company',
        'ps-label-email': 'Reply Email',
        'ps-label-subject': 'Subject',
        'ps-label-message': 'Inquiry Details',
        'ps-btn': 'Send Inquiry',
        'ps-back': '← Back to Main',
        'ps-name-ph': 'Enter your name',
        'ps-subject-ph': 'Inquiry about partnership',
        'ps-message-ph': 'Please enter detailed information'
    }
};

let currentLanguage = localStorage.getItem('language') || 'ko';
let anniversaryDate = localStorage.getItem('anniversaryDate') || '2022-01-01';
let nextMeetingDate = localStorage.getItem('nextMeetingDate') || '2024-12-25T12:00';

let meetingCountry = localStorage.getItem('meetingCountry') || 'South Korea';
let meetingAirport = localStorage.getItem('meetingAirport') || "Seoul/Incheon (ICN)";
let meetingTimezone = localStorage.getItem('meetingTimezone') || 'Asia/Seoul';

let myCountry = localStorage.getItem('myCountry') || 'South Korea';
let myLocation = localStorage.getItem('myLocation') || "Seoul/Gimpo (GMP)";
let myTimezone = localStorage.getItem('myTimezone') || 'Asia/Seoul';

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
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
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
        
        const el = document.getElementById(elementId);
        if (el) {
            el.innerHTML = `
                <div class="temp">${temp}°C</div>
                <div class="desc">${icon} ${desc}</div>
            `;
        }
    } catch (e) {
        const el = document.getElementById(elementId);
        if (el) el.textContent = "---";
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
        45: "Fog", 48: "Fog", 51: "Drizzle", 61: "Rain", 71: "Snow", 95: "Storm"
    };
    return descs[code] || "Cloudy";
}

async function updateWeather() {
    const myData = locationData[myCountry]?.find(l => l.name === myLocation);
    if (myData && document.getElementById('my-weather-info')) fetchWeather(myData.lat, myData.lon, 'my-weather-info');

    const partnerData = locationData[partnerCountry]?.find(l => l.name === partnerLocation);
    if (partnerData && document.getElementById('partner-weather-info')) fetchWeather(partnerData.lat, partnerData.lon, 'partner-weather-info');
}

function updateDisplays() {
    if (document.getElementById('days-together')) updateDaysTogether();
    if (document.getElementById('countdown-timer')) updateCountdown();
    if (document.getElementById('my-time')) updateClocks();
    updateWeather();
    
    const dLoc = document.getElementById('display-location');
    if (dLoc) dLoc.textContent = `${meetingCountry}, ${meetingAirport}`;
    
    const myTzEl = document.getElementById('my-tz');
    if (myTzEl) myTzEl.textContent = `${myCountry}, ${myLocation}`;
    
    const pTzEl = document.getElementById('partner-tz');
    if (pTzEl) pTzEl.textContent = `${partnerCountry}, ${partnerLocation}`;
}

function updateDaysTogether() {
    const today = new Date();
    const anniv = new Date(anniversaryDate);
    const diff = Math.floor((today.getTime() - anniv.getTime()) / (1000 * 3600 * 24));
    const el = document.getElementById('days-together');
    if (el) el.textContent = Math.max(0, diff);
}

function updateCountdown() {
    const targetUTC = convertToUTC(nextMeetingDate, meetingTimezone);
    const remaining = targetUTC - new Date().getTime();
    const timer = document.getElementById('countdown-timer');
    if (!timer) return;

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
    const myEl = document.getElementById('my-time');
    if (myEl) myEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: myTimezone });
    
    const pEl = document.getElementById('partner-time');
    if (pEl) {
        try {
            pEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: partnerTimezone });
        } catch (e) { pEl.textContent = "TZ Error"; }
    }
}

function convertToUTC(dateStr, tz) {
    const date = new Date(dateStr);
    const invDate = new Date(date.toLocaleString('en-US', { timeZone: tz }));
    return date.getTime() + (date.getTime() - invDate.getTime());
}

function toggleMiniSettings(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function saveSettings() {
    if (document.getElementById('input-anniversary')) anniversaryDate = document.getElementById('input-anniversary').value;
    if (document.getElementById('input-meeting')) nextMeetingDate = document.getElementById('input-meeting').value;
    
    const airportSelect = document.getElementById('input-airport');
    if (airportSelect && airportSelect.selectedIndex >= 0) {
        meetingCountry = document.getElementById('input-country').value;
        meetingAirport = airportSelect.options[airportSelect.selectedIndex].text;
        meetingTimezone = airportSelect.value;
    }

    const myLocSelect = document.getElementById('input-my-location');
    if (myLocSelect && myLocSelect.selectedIndex >= 0) {
        myCountry = document.getElementById('input-my-country').value;
        myLocation = myLocSelect.options[myLocSelect.selectedIndex].text;
        myTimezone = myLocSelect.value;
    }

    const partnerLocSelect = document.getElementById('input-partner-location');
    if (partnerLocSelect && partnerLocSelect.selectedIndex >= 0) {
        partnerCountry = document.getElementById('input-partner-country').value;
        partnerLocation = partnerLocSelect.options[partnerLocSelect.selectedIndex].text;
        partnerTimezone = partnerLocSelect.value;
    }

    localStorage.setItem('anniversaryDate', anniversaryDate);
    localStorage.setItem('nextMeetingDate', nextMeetingDate);
    localStorage.setItem('meetingCountry', meetingCountry);
    localStorage.setItem('meetingAirport', meetingAirport);
    localStorage.setItem('meetingTimezone', meetingTimezone);
    localStorage.setItem('myCountry', myCountry);
    localStorage.setItem('myLocation', myLocation);
    localStorage.setItem('myTimezone', myTimezone);
    localStorage.setItem('partnerCountry', partnerCountry);
    localStorage.setItem('partnerLocation', partnerLocation);
    localStorage.setItem('partnerTimezone', partnerTimezone);

    updateDisplays();
}

function updateAirportList() {
    const country = document.getElementById('input-country')?.value;
    const select = document.getElementById('input-airport');
    if (!select || !country) return;
    select.innerHTML = '';
    if (locationData[country]) {
        locationData[country].forEach(ap => {
            const opt = document.createElement('option');
            opt.value = ap.tz; opt.textContent = ap.name;
            if (ap.name === meetingAirport) opt.selected = true;
            select.appendChild(opt);
        });
    }
    saveSettings();
}

function updateMyCityList() {
    const country = document.getElementById('input-my-country')?.value;
    const select = document.getElementById('input-my-location');
    if (!select || !country) return;
    select.innerHTML = '';
    if (locationData[country]) {
        locationData[country].forEach(ap => {
            const opt = document.createElement('option');
            opt.value = ap.tz; opt.textContent = ap.name;
            if (ap.name === myLocation) opt.selected = true;
            select.appendChild(opt);
        });
    }
    saveSettings();
}

function updatePartnerLocationList() {
    const country = document.getElementById('input-partner-country')?.value;
    const select = document.getElementById('input-partner-location');
    if (!select || !country) return;
    select.innerHTML = '';
    if (locationData[country]) {
        locationData[country].forEach(ap => {
            const opt = document.createElement('option');
            opt.value = ap.tz; opt.textContent = ap.name;
            if (ap.name === partnerLocation) opt.selected = true;
            select.appendChild(opt);
        });
    }
    saveSettings();
}

function initializeForm() {
    const countries = Object.keys(locationData).sort();
    const cSelect = document.getElementById('input-country');
    const myCSelect = document.getElementById('input-my-country');
    const pCSelect = document.getElementById('input-partner-country');
    
    [cSelect, myCSelect, pCSelect].forEach(select => {
        if (!select) return;
        select.innerHTML = '';
        countries.forEach(country => {
            const opt = document.createElement('option');
            opt.value = country; opt.textContent = country;
            if (select.id === 'input-country' && country === meetingCountry) opt.selected = true;
            if (select.id === 'input-my-country' && country === myCountry) opt.selected = true;
            if (select.id === 'input-partner-country' && country === partnerCountry) opt.selected = true;
            select.appendChild(opt);
        });
    });

    updateAirportList();
    updateMyCityList();
    updatePartnerLocationList();
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('input-anniversary')) document.getElementById('input-anniversary').value = anniversaryDate;
    if (document.getElementById('input-meeting')) document.getElementById('input-meeting').value = nextMeetingDate;
    initializeForm();
    setLanguage(currentLanguage);
    setInterval(() => { updateCountdown(); updateClocks(); }, 1000);
    setInterval(updateWeather, 30 * 60 * 1000);
});