let userFlag = '🌍';
let posts = JSON.parse(localStorage.getItem('loungePosts')) || [];
let likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
let currentFilter = 'All';

// 가상 국가 감지
async function detectUserCountry() {
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data.country_code) {
            userFlag = getFlagEmoji(data.country_code);
            updateFlagUI();
        }
    } catch (e) {
        console.log("Country detection failed, using default.");
    }
}

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

function updateFlagUI() {
    const el = document.getElementById('current-flag-display');
    if (el) el.innerText = userFlag;
}

function manualChangeFlag() {
    const input = prompt(currentLanguage === 'ko' ? "국가 코드(2자리)를 입력하거나 이모지를 직접 입력하세요 (예: KR, US, 🇰🇷):" : "Enter 2-letter country code or emoji (e.g. KR, US, 🇺🇸):");
    if (!input) return;
    
    if (input.length === 2) {
        userFlag = getFlagEmoji(input);
    } else {
        userFlag = input;
    }
    updateFlagUI();
}

// 상대 시간 계산 함수
function getTimeAgo(dateIso) {
    const seconds = Math.floor((new Date() - new Date(dateIso)) / 1000);
    const t = translations[currentLanguage];
    
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return interval + (currentLanguage === 'ko' ? '년 전' : 'y ago');
    
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + (currentLanguage === 'ko' ? '개월 전' : 'mo ago');
    
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + t['time-days'];
    
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + t['time-hours'];
    
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return interval + t['time-minutes'];
    
    return t['time-just-now'];
}

function addPost() {
    const nick = document.getElementById('post-nickname').value.trim();
    const pw = document.getElementById('post-password').value.trim();
    const cat = document.getElementById('post-category').value;
    const content = document.getElementById('post-content').value.trim();

    const isAdminNick = nick.toLowerCase() === 'admin' || nick === '관리자';
    const adminPw = 'admin102938'; 

    if (!nick || !pw || !content) {
        alert(currentLanguage === 'ko' ? "모든 필드를 입력해주세요." : "Please fill in all fields.");
        return;
    }

    if (pw.length < 4) {
        alert(currentLanguage === 'ko' ? "비밀번호는 4자리 이상으로 입력해주세요." : "Password must be at least 4 characters.");
        return;
    }

    if (isAdminNick && pw !== adminPw) {
        alert(currentLanguage === 'ko' ? "관리자 닉네임은 지정된 비밀번호로만 사용할 수 있습니다." : "Admin nickname is reserved. Please use the correct password.");
        return;
    }

    const newPost = {
        id: Date.now(),
        nickname: nick,
        password: pw,
        category: cat,
        content: content,
        flag: isAdminNick ? '👑' : userFlag,
        date: new Date().toISOString(),
        isAdmin: isAdminNick,
        likes: 0
    };

    posts.unshift(newPost);
    localStorage.setItem('loungePosts', JSON.stringify(posts));
    
    document.getElementById('post-nickname').value = '';
    document.getElementById('post-password').value = '';
    document.getElementById('post-content').value = '';
    
    renderPosts();
}

function toggleLike(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;

    if (likedPosts.includes(id)) {
        likedPosts = likedPosts.filter(item => item !== id);
        post.likes = Math.max(0, (post.likes || 0) - 1);
    } else {
        likedPosts.push(id);
        post.likes = (post.likes || 0) + 1;
    }
    
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    localStorage.setItem('loungePosts', JSON.stringify(posts));
    renderPosts();
}

function deletePost(id) {
    const inputPw = prompt(currentLanguage === 'ko' ? "비밀번호를 입력하세요:" : "Enter password:");
    if (inputPw === null) return;

    const postIndex = posts.findIndex(p => p.id === id);
    if (postIndex > -1) {
        const adminPw = 'admin102938';
        const requiredPw = posts[postIndex].isAdmin ? adminPw : posts[postIndex].password;
        
        if (inputPw === requiredPw || inputPw === adminPw) {
            posts.splice(postIndex, 1);
            localStorage.setItem('loungePosts', JSON.stringify(posts));
            renderPosts();
        } else {
            alert(currentLanguage === 'ko' ? "비밀번호가 틀렸습니다." : "Incorrect password.");
        }
    }
}

function filterPosts(category) {
    currentFilter = category;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.getAttribute('data-i18n');
        if (category === 'All' && btnText === 'cat-all') btn.classList.add('active');
        else if (category === 'Greeting' && btnText === 'cat-greeting') btn.classList.add('active');
        else if (category === 'Support' && btnText === 'cat-support') btn.classList.add('active');
        else if (category === 'Advice' && btnText === 'cat-advice') btn.classList.add('active');
    });
    renderPosts();
}

function translateText(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;
    const targetLang = currentLanguage === 'ko' ? 'ko' : 'en';
    const url = `https://translate.google.com/?sl=auto&tl=${targetLang}&text=${encodeURIComponent(post.content)}&op=translate`;
    window.open(url, '_blank');
}

function renderPosts() {
    const container = document.getElementById('post-list');
    if (!container) return;
    container.innerHTML = '';

    const filtered = currentFilter === 'All' ? posts : posts.filter(p => p.category === currentFilter);

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#999; padding:60px;">${currentLanguage === 'ko' ? '작성된 글이 없습니다.' : 'No posts yet.'}</p>`;
        return;
    }

    filtered.forEach(p => {
        const timeLabel = getTimeAgo(p.date);
        const isLiked = likedPosts.includes(p.id);

        const card = document.createElement('div');
        card.className = `post-card ${p.isAdmin ? 'admin-post' : ''}`;
        card.innerHTML = `
            <div class="post-header">
                <div class="user-info">
                    <span class="flag-icon">${p.flag}</span>
                    <span class="${p.isAdmin ? 'admin-nick' : ''}">${p.nickname}</span>
                    ${p.isAdmin ? '<span class="admin-badge">ADMIN</span>' : ''}
                </div>
                <div style="display:flex; align-items:center;">
                    <span class="category-tag">${p.category}</span>
                    <button class="translate-btn" onclick="translateText(${p.id})">Translate</button>
                </div>
            </div>
            <div class="post-content">${p.content}</div>
            <div class="post-footer">
                <div class="interaction-box">
                    <div class="like-btn" onclick="toggleLike(${p.id})">
                        ${isLiked ? '❤️' : '🤍'} <span>${p.likes || 0}</span>
                    </div>
                    <span class="delete-btn" onclick="deletePost(${p.id})">Delete</span>
                </div>
                <span>${timeLabel}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    detectUserCountry();
    renderPosts();
    // 1분마다 시간 업데이트를 위해 리렌더링
    setInterval(renderPosts, 60000);
});
