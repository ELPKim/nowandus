// Verified Final Worldwide Location Data (Permanent Full Expansion)
const locationData = {
    "South Korea": [
        { name: "Seoul/Incheon (ICN)", tz: "Asia/Seoul", lat: 37.4602, lon: 126.4407 },
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
        { name: "Seattle (SEA)", tz: "America/Los_Angeles", lat: 47.4502, lon: -122.3088 },
        { name: "El Paso (ELP)", tz: "America/Denver", lat: 31.8066, lon: -106.3778 },
        { name: "Honolulu (HNL)", tz: "Pacific/Honolulu", lat: 21.3156, lon: -157.9242 },
        { name: "Miami (MIA)", tz: "America/New_York", lat: 25.7959, lon: -80.2870 },
        { name: "Las Vegas (LAS)", tz: "America/Los_Angeles", lat: 36.0840, lon: -115.1537 },
        { name: "Washington (IAD)", tz: "America/New_York", lat: 38.9531, lon: -77.4565 }
    ],
    "Japan": [
        { name: "Tokyo Narita (NRT)", tz: "Asia/Tokyo", lat: 35.7720, lon: 140.3929 },
        { name: "Tokyo Haneda (HND)", tz: "Asia/Tokyo", lat: 35.5494, lon: 139.7798 },
        { name: "Osaka (KIX)", tz: "Asia/Tokyo", lat: 34.4320, lon: 135.2304 },
        { name: "Fukuoka (FUK)", tz: "Asia/Tokyo", lat: 33.5859, lon: 130.4507 },
        { name: "Sapporo (CTS)", tz: "Asia/Tokyo", lat: 42.7752, lon: 141.6923 }
    ],
    "China": [
        { name: "Beijing (PEK)", tz: "Asia/Shanghai", lat: 40.0799, lon: 116.6031 },
        { name: "Shanghai (PVG)", tz: "Asia/Shanghai", lat: 31.1443, lon: 121.8083 },
        { name: "Guangzhou (CAN)", tz: "Asia/Shanghai", lat: 23.3924, lon: 113.2988 },
        { name: "Hong Kong (HKG)", tz: "Asia/Hong_Kong", lat: 22.3080, lon: 113.9185 }
    ],
    "UK": [
        { name: "London (LHR)", tz: "Europe/London", lat: 51.4700, lon: -0.4543 },
        { name: "Manchester (MAN)", tz: "Europe/London", lat: 53.3588, lon: -2.2727 },
        { name: "Edinburgh (EDI)", tz: "Europe/London", lat: 55.9508, lon: -3.3615 }
    ],
    "France": [
        { name: "Paris (CDG)", tz: "Europe/Paris", lat: 49.0097, lon: 2.5479 },
        { name: "Nice (NCE)", tz: "Europe/Paris", lat: 43.6653, lon: 7.2150 },
        { name: "Lyon (LYS)", tz: "Europe/Paris", lat: 45.7256, lon: 5.0811 }
    ],
    "Germany": [
        { name: "Frankfurt (FRA)", tz: "Europe/Berlin", lat: 50.0379, lon: 8.5622 },
        { name: "Munich (MUC)", tz: "Europe/Berlin", lat: 48.3537, lon: 11.7750 },
        { name: "Berlin (BER)", tz: "Europe/Berlin", lat: 52.3667, lon: 13.5033 }
    ],
    "Canada": [
        { name: "Toronto (YYZ)", tz: "America/Toronto", lat: 43.6777, lon: -79.6248 },
        { name: "Vancouver (YVR)", tz: "America/Vancouver", lat: 49.1967, lon: -123.1815 },
        { name: "Montreal (YUL)", tz: "America/Toronto", lat: 45.4657, lon: -73.7455 }
    ],
    "Australia": [
        { name: "Sydney (SYD)", tz: "Australia/Sydney", lat: -33.9399, lon: 151.1753 },
        { name: "Melbourne (MEL)", tz: "Australia/Melbourne", lat: -37.6690, lon: 144.8410 },
        { name: "Brisbane (BNE)", tz: "Australia/Brisbane", lat: -27.3942, lon: 153.1218 }
    ],
    "Italy": [{ name: "Rome (FCO)", tz: "Europe/Rome", lat: 41.8003, lon: 12.2389 }],
    "Spain": [{ name: "Madrid (MAD)", tz: "Europe/Madrid", lat: 40.4983, lon: -3.5676 }],
    "Switzerland": [{ name: "Zurich (ZRH)", tz: "Europe/Zurich", lat: 47.4582, lon: 8.5555 }],
    "Singapore": [{ name: "Singapore (SIN)", tz: "Asia/Singapore", lat: 1.3644, lon: 103.9915 }],
    "Taiwan": [{ name: "Taipei (TPE)", tz: "Asia/Taipei", lat: 25.0797, lon: 121.2342 }],
    "Thailand": [{ name: "Bangkok (BKK)", tz: "Asia/Bangkok", lat: 13.6900, lon: 100.7501 }],
    "Vietnam": [{ name: "Ho Chi Minh (SGN)", tz: "Asia/Ho_Chi_Minh", lat: 10.8185, lon: 106.6588 }],
    "Malaysia": [{ name: "Kuala Lumpur (KUL)", tz: "Asia/Kuala_Lumpur", lat: 2.7456, lon: 101.7072 }],
    "Indonesia": [{ name: "Jakarta (CGK)", tz: "Asia/Jakarta", lat: -6.1256, lon: 106.6559 }],
    "Philippines": [{ name: "Manila (MNL)", tz: "Asia/Manila", lat: 14.5086, lon: 121.0194 }],
    "UAE": [{ name: "Dubai (DXB)", tz: "Asia/Dubai", lat: 25.2532, lon: 55.3657 }],
    "Turkey": [{ name: "Istanbul (IST)", tz: "Europe/Istanbul", lat: 41.2753, lon: 28.7519 }],
    "Russia": [{ name: "Moscow (SVO)", tz: "Europe/Moscow", lat: 55.9726, lon: 37.4146 }],
    "Brazil": [{ name: "Sao Paulo (GRU)", tz: "America/Sao_Paulo", lat: -23.4356, lon: -46.4731 }],
    "Mexico": [{ name: "Mexico City (MEX)", tz: "America/Mexico_City", lat: 19.4361, lon: -99.0719 }],
    "Argentina": [{ name: "Buenos Aires (EZE)", tz: "America/Argentina/Buenos_Aires", lat: -34.8222, lon: -58.5358 }],
    "New Zealand": [{ name: "Auckland (AKL)", tz: "Pacific/Auckland", lat: -37.0081, lon: 174.7850 }],
    "South Africa": [{ name: "Johannesburg (JNB)", tz: "Africa/Johannesburg", lat: -26.1392, lon: 28.2460 }],
    "Others": [{ name: "UTC/GMT", tz: "UTC", lat: 0, lon: 0 }]
};

const translations = {
    'ko': {
        'header-title': 'Now and Us',
        'header-subtitle': '멀리 있어도 마음은 곁에, 장거리 연애를 위한 따뜻한 기록',
        'anniversary-title': '함께한 시간',
        'anniversary-text-before': '우리가 사랑한 지 어느덧',
        'anniversary-text-after': '일이 되었어요.',
        'countdown-title': '다시 마주 보게 될 날',
        'countdown-text-before': '설레는 마음으로',
        'countdown-text-after': '만남을 기다려요.',
        'world-clock-title': '다른 공간, 연결된 시간',
        'my-time-label': '나의 시간',
        'partner-time-label': '상대방의 시간',
        'weather-title': '우리의 오늘 날씨',
        'my-weather-label': '내가 있는 곳',
        'partner-weather-label': '네가 있는 곳',
        'footer-text': '먼 거리를 사랑으로 채워가는 모든 분들을 응원합니다 ❤️',
        'met-message': '드디어 만났어요!',
        'days-unit': '일', 'hours-unit': '시간', 'minutes-unit': '분', 'seconds-unit': '초',
        'settings-button': '수정하기',
        'label-anniversary': '처음 만난 날:', 'label-meeting': '다시 만날 날:', 'label-country': '나라:', 'label-airport': '공항:', 'label-location': '위치:',
        'timezone-info': '만남 장소:', 'change-my-loc': '나의 위치 설정', 'change-partner-tz': '상대방 위치 설정',
        'my-loc-title': '나의 현재 위치', 'partner-loc-title': '상대방 현재 위치',
        'ps-header': '제휴 문의',
        'ps-subtitle': 'Now and Us와 함께 따뜻한 가치를 만들어가요',
        'ps-label-name': '성함 / 회사명', 'ps-label-email': '회신받을 이메일', 'ps-label-subject': '문의 제목', 'ps-label-message': '문의 내용',
        'ps-btn': '보내기', 'ps-back': '← 메인으로 돌아가기',
        'ps-name-ph': '이름을 입력해주세요', 'ps-subject-ph': '제휴 문의 드립니다', 'ps-message-ph': '상세한 내용을 적어주세요',
        'board-header': '고객 소리함',
        'board-subtitle': '여러분의 소중한 의견을 들려주세요',
        'board-label-name': '닉네임', 'board-label-subject': '문의 제목', 'board-label-message': '문의 내용',
        'board-name-ph': '닉네임을 입력해주세요', 'board-subject-ph': '문의 제목을 입력해주세요', 'board-message-ph': '상세한 내용을 적어주세요',
        'board-btn': '보내기',
        'guide-title': '장거리 연애, 마음의 거리를 줄이는 방법',
        'guide-text-1': '✈️ 장거리 연애는 물리적인 거리가 멀어져 있지만, <strong>서로의 일상을 공유하며 마음의 거리를 좁힐 수 있습니다.</strong> Now and Us는 서로의 시간과 날씨를 실시간으로 확인하며, 마치 같은 공간에 있는 듯한 연결감을 제공합니다.',
        'guide-text-2': '💖 <strong>다음 만남을 기다리는 설렘</strong>을 카운트다운 기능으로 함께 나누세요. 기념일을 잊지 않고 챙기는 것은 서로에 대한 소중한 배려입니다.',
        'privacy-link': '개인정보처리방침',
        'terms-link': '이용약관',
        'privacy-title': '개인정보 처리방침 (Privacy Policy)',
        'privacy-intro': 'Now and Us(이하 "서비스")는 이용자의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.',
        'privacy-q1': '1. 수집하는 개인정보 항목',
        'privacy-a1': '본 서비스는 회원가입 없이 이용 가능하며, 별도의 서버에 개인정보를 저장하지 않습니다. 모든 설정값(기념일, 위치 등)은 사용자의 브라우저 로컬 스토리지(Local Storage)에만 저장됩니다.',
        'privacy-q2': '2. 쿠키(Cookie) 및 로컬 스토리지 사용',
        'privacy-a2': '서비스 이용 편의를 위해 쿠키 및 로컬 스토리지를 사용합니다. 이는 웹사이트 접속 시 사용자의 설정 정보를 유지하기 위함이며, 언제든지 브라우저 설정을 통해 거부할 수 있습니다.',
        'privacy-q3': '3. Google AdSense',
        'privacy-a3': '본 사이트는 광고 게재를 위해 Google AdSense를 사용합니다. Google은 사용자의 웹사이트 방문 기록을 바탕으로 맞춤형 광고를 제공하기 위해 쿠키를 사용할 수 있습니다. 사용자는 Google 광고 설정에서 맞춤형 광고를 해제할 수 있습니다.',
        'privacy-q4': '4. 문의사항',
        'privacy-a4': '개인정보 관련 문의사항은 고객 소리함 또는 제휴 문의를 통해 접수해 주시기 바랍니다.',
        'terms-title': '이용약관 (Terms of Service)',
        'terms-q1': '1. 목적',
        'terms-a1': '본 약관은 "Now and Us"(이하 "서비스")의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.',
        'terms-q2': '2. 서비스의 제공 및 변경',
        'terms-a2': '서비스는 무료로 제공되며, 운영상 필요에 따라 사전 고지 없이 변경되거나 중단될 수 있습니다.',
        'terms-q3': '3. 면책조항',
        'terms-a3': '서비스에서 제공하는 정보(날씨, 시간 등)의 정확성을 보장하지 않으며, 이로 인해 발생한 손해에 대해 책임지지 않습니다. 모든 데이터는 참고용으로만 사용하시기 바랍니다.',
        'terms-q4': '4. 저작권',
        'terms-a4': '서비스 내 모든 콘텐츠의 저작권은 "Now and Us" 운영자에게 있으며, 무단 복제 및 배포를 금지합니다.',
        'news-header': '세계 뉴스',
        'news-subtitle': '서로의 나라에서 일어나고 있는 소식을 확인해보세요',
        'news-label-my': '나의 나라 소식',
        'news-label-partner': '상대방 나라 소식',
        'news-load-more': '더 보기',
        'news-loading': '뉴스를 불러오는 중...',
        'news-no-data': '뉴스를 불러올 수 없습니다.',
        'news-read-more': '자세히 보기'
    },
    'en': {
        'header-title': 'Now and Us',
        'header-subtitle': 'Distance is just a test of how far love can travel.',
        'anniversary-title': 'Love Journey',
        'anniversary-text-before': "It has been",
        'anniversary-text-after': "beautiful days.",
        'countdown-title': 'Until We Meet Again',
        'countdown-text-before': 'Only',
        'countdown-text-after': 'left!',
        'world-clock-title': 'Our Times',
        'my-time-label': 'My Time',
        'partner-time-label': "Partner's Time",
        'weather-title': 'Our Weather',
        'my-weather-label': 'Where I am',
        'partner-weather-label': 'Where you are',
        'footer-text': 'Celebrating every mile covered by love ❤️',
        'met-message': "Finally together!",
        'days-unit': 'd', 'hours-unit': 'h', 'minutes-unit': 'm', 'seconds-unit': 's',
        'settings-button': 'Edit',
        'label-anniversary': 'First Day:', 'label-meeting': 'Next Meeting:', 'label-country': 'Country:', 'label-airport': 'Airport:', 'label-location': 'Location:',
        'timezone-info': 'Meeting At:', 'change-my-loc': 'Set My Loc', 'change-partner-tz': 'Set Partner Loc',
        'my-loc-title': 'My Location', 'partner-loc-title': "Partner's Location",
        'ps-header': 'Partnership',
        'ps-subtitle': 'Create values with Now and Us',
        'ps-label-name': 'Name / Company', 'ps-label-email': 'Reply Email', 'ps-label-subject': 'Subject', 'ps-label-message': 'Inquiry Details',
        'ps-btn': 'Send', 'ps-back': '← Back to Main',
        'ps-name-ph': 'Enter your name', 'ps-subject-ph': 'Inquiry about partnership', 'ps-message-ph': 'Please enter detailed information',
        'board-header': 'Customer Center',
        'board-subtitle': 'Your voice for a better Now and Us',
        'board-label-name': 'Nickname', 'board-label-subject': 'Subject', 'board-label-message': 'Inquiry Details',
        'board-name-ph': 'Enter your nickname', 'board-subject-ph': 'Enter inquiry subject', 'board-message-ph': 'Please enter detailed information',
        'board-btn': 'Send',
        'guide-title': 'How to Bridge the Distance in LDR',
        'guide-text-1': '✈️ Long-distance relationships are physically far apart, but you can <strong>narrow the distance of your heart by sharing your daily life.</strong> Now and Us allows you to check each other\'s time and weather in real-time, providing a sense of connection as if you were in the same space.',
        'guide-text-2': '💖 Share the <strong>excitement of waiting for the next meeting</strong> with the countdown function. Remembering anniversaries is a precious consideration for each other.',
        'privacy-link': 'Privacy Policy',
        'terms-link': 'Terms of Service',
        'privacy-title': 'Privacy Policy',
        'privacy-intro': 'Now and Us ("the Service") values your privacy and complies with relevant data protection laws.',
        'privacy-q1': '1. Information We Collect',
        'privacy-a1': 'This service is available without registration and does not store personal information on any separate server. All settings (anniversaries, locations, etc.) are stored only in the user\'s browser Local Storage.',
        'privacy-q2': '2. Use of Cookies and Local Storage',
        'privacy-a2': 'We use cookies and local storage for your convenience. This is to maintain your settings when you access the website, and you can refuse it at any time through your browser settings.',
        'privacy-q3': '3. Google AdSense',
        'privacy-a3': 'This site uses Google AdSense to display advertisements. Google may use cookies to provide tailored advertisements based on a user\'s visit history to websites. Users can opt out of personalized advertising in Google Ad Settings.',
        'privacy-q4': '4. Inquiries',
        'privacy-a4': 'For privacy-related inquiries, please contact us through the Customer Center or Partnership inquiry form.',
        'terms-title': 'Terms of Service',
        'terms-q1': '1. Purpose',
        'terms-a1': 'These terms aim to stipulate the conditions and procedures for using "Now and Us" ("the Service").',
        'terms-q2': '2. Provision and Modification of Service',
        'terms-a2': 'The service is provided for free and may be changed or suspended without prior notice depending on operational needs.',
        'terms-q3': '3. Disclaimer',
        'terms-a3': 'We do not guarantee the accuracy of the information (weather, time, etc.) provided by the service and are not responsible for any damage caused by this. Please use all data for reference only.',
        'terms-q4': '4. Copyright',
        'terms-a4': 'The copyright for all content within the service belongs to the "Now and Us" operator, and unauthorized reproduction or distribution is prohibited.',
        'news-header': 'World News',
        'news-subtitle': 'Check what is happening in each other\'s country',
        'news-label-my': 'News from my country',
        'news-label-partner': 'News from partner\'s country',
        'news-load-more': 'Load More',
        'news-loading': 'Loading news...',
        'news-no-data': 'Could not load news.',
        'news-read-more': 'Read More'
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

// World News Logic (Reading from local static JSON updated by GitHub Actions)
async function fetchNews(countryName, elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    el.innerHTML = `<p data-i18n="news-loading">${translations[currentLanguage]['news-loading']}</p>`;
    
    try {
        // GitHub Actions가 업데이트하는 정적 JSON 파일 로드
        const res = await fetch('news-data.json');
        const allNews = await res.json();
        
        const newsItems = allNews[countryName] || [];
        
        if (newsItems.length > 0) {
            el.innerHTML = newsItems.map(n => `
                <div class="news-card" style="background: white; padding: 20px; border-radius: 15px; margin-bottom: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); text-align: left;">
                    <h4 style="margin: 0 0 10px 0; color: var(--accent-color);">${n.title}</h4>
                    <p style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">${n.text}</p>
                    <a href="${n.url}" target="_blank" style="color: var(--primary-color); font-weight: bold; text-decoration: none; font-size: 0.85rem;">${translations[currentLanguage]['news-read-more']} →</a>
                </div>
            `).join('');
        } else {
            el.innerHTML = `<p data-i18n="news-no-data">${translations[currentLanguage]['news-no-data']}</p>`;
        }
    } catch (e) {
        el.innerHTML = `<p data-i18n="news-no-data">${translations[currentLanguage]['news-no-data']}</p>`;
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    updateDisplays();
}

async function fetchWeather(lat, lon, elementId) {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await res.json();
        const el = document.getElementById(elementId);
        if (el && data.current_weather) {
            const w = data.current_weather;
            el.innerHTML = `<div class="temp">${Math.round(w.temperature)}°C</div><div class="desc">${getWIcon(w.weathercode)}</div>`;
        }
    } catch (e) { if(document.getElementById(elementId)) document.getElementById(elementId).textContent = "---"; }
}

function getWIcon(c) {
    if(c<=1) return "☀️"; if(c<=3) return "☁️"; if(c<=67) return "🌧️"; if(c<=77) return "❄️"; return "⛈️";
}

function updateDisplays() {
    if(document.getElementById('days-together')) {
        document.getElementById('days-together').textContent = Math.max(0, Math.floor((new Date().getTime() - new Date(anniversaryDate).getTime()) / 86400000));
    }
    const timer = document.getElementById('countdown-timer');
    if(timer) {
        const target = new Date(nextMeetingDate).getTime() + (new Date().getTime() - new Date(new Date().toLocaleString('en-US',{timeZone:meetingTimezone})).getTime());
        const rem = target - new Date().getTime();
        if(rem > 0) {
            const d = Math.floor(rem/86400000); const h = Math.floor((rem%86400000)/3600000);
            const m = Math.floor((rem%3600000)/60000); const s = Math.floor((rem%60000)/1000);
            const u = translations[currentLanguage];
            timer.textContent = `${d}${u['days-unit']} ${h}${u['hours-unit']} ${m}${u['minutes-unit']} ${s}${u['seconds-unit']}`;
        } else { timer.textContent = translations[currentLanguage]['met-message']; }
    }
    if(document.getElementById('my-time')) {
        const now = new Date();
        document.getElementById('my-time').textContent = now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false,timeZone:myTimezone});
        if(document.getElementById('partner-time')) {
            try { document.getElementById('partner-time').textContent = now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false,timeZone:partnerTimezone}); } 
            catch (e) { document.getElementById('partner-time').textContent = "TZ Error"; }
        }
    }
    const myD = locationData[myCountry]?.find(l=>l.name===myLocation);
    if(myD && document.getElementById('my-weather-info')) fetchWeather(myD.lat,myD.lon,'my-weather-info');
    const pD = locationData[partnerCountry]?.find(l=>l.name===partnerLocation);
    if(pD && document.getElementById('partner-weather-info')) fetchWeather(pD.lat,pD.lon,'partner-weather-info');
    if(document.getElementById('display-location')) document.getElementById('display-location').textContent = `${meetingCountry}, ${meetingAirport}`;
    if(document.getElementById('my-tz')) document.getElementById('my-tz').textContent = `${myCountry}, ${myLocation}`;
    if(document.getElementById('partner-tz')) document.getElementById('partner-tz').textContent = `${partnerCountry}, ${partnerLocation}`;
}

function saveSettings() {
    if(document.getElementById('input-anniversary')) anniversaryDate = document.getElementById('input-anniversary').value;
    if(document.getElementById('input-meeting')) nextMeetingDate = document.getElementById('input-meeting').value;
    const apS = document.getElementById('input-airport');
    if(apS && apS.selectedIndex>=0) {
        meetingCountry = document.getElementById('input-country').value;
        meetingAirport = apS.options[apS.selectedIndex].text;
        meetingTimezone = apS.value;
    }
    const myS = document.getElementById('input-my-location');
    if(myS && myS.selectedIndex>=0) {
        myCountry = document.getElementById('input-my-country').value;
        myLocation = myS.options[myS.selectedIndex].text;
        myTimezone = myS.value;
    }
    const pS = document.getElementById('input-partner-location');
    if(pS && pS.selectedIndex>=0) {
        partnerCountry = document.getElementById('input-partner-country').value;
        partnerLocation = pS.options[pS.selectedIndex].text;
        partnerTimezone = pS.value;
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

function updateList(cId, sId, currentVal) {
    const c = document.getElementById(cId)?.value;
    const s = document.getElementById(sId);
    if(!s || !c || !locationData[c]) return;
    s.innerHTML = '';
    locationData[c].forEach(l => {
        const o = document.createElement('option');
        o.value = l.tz; o.textContent = l.name;
        if(l.name === currentVal) o.selected = true;
        s.appendChild(o);
    });
    saveSettings();
}

function initializeForm() {
    const countries = Object.keys(locationData).sort();
    ['input-country','input-my-country','input-partner-country'].forEach(id => {
        const s = document.getElementById(id);
        if(!s) return;
        s.innerHTML = '';
        countries.forEach(c => {
            const o = document.createElement('option');
            o.value = c; o.textContent = c;
            if((id==='input-country'&&c===meetingCountry)||(id==='input-my-country'&&c===myCountry)||(id==='input-partner-country'&&c===partnerCountry)) o.selected = true;
            s.appendChild(o);
        });
    });
    updateList('input-country','input-airport',meetingAirport);
    updateList('input-my-country','input-my-location',myLocation);
    updateList('input-partner-country','input-partner-location',partnerLocation);
}

function toggleMiniSettings(id) {
    const el = document.getElementById(id);
    if(el) el.style.display = el.style.display==='none'?'block':'none';
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('input-anniversary')) document.getElementById('input-anniversary').value = anniversaryDate;
    if(document.getElementById('input-meeting')) document.getElementById('input-meeting').value = nextMeetingDate;
    initializeForm();
    setLanguage(currentLanguage);
    setInterval(updateDisplays, 1000);
});

window.updateAirportList = () => updateList('input-country','input-airport',meetingAirport);
window.updateMyCityList = () => updateList('input-my-country','input-my-location',myLocation);
window.updatePartnerLocationList = () => updateList('input-partner-country','input-partner-location',partnerLocation);
window.setLanguage = setLanguage;
window.toggleMiniSettings = toggleMiniSettings;
window.saveSettings = saveSettings;
