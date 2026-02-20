let userFlag = '🌍';
let posts = JSON.parse(localStorage.getItem('loungePosts')) || [];
let currentFilter = 'All';

// 가상 국가 감지 (실제 서비스에서는 IP API 활용)
async function detectUserCountry() {
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data.country_code) {
            userFlag = getFlagEmoji(data.country_code);
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

function addPost() {
    const nick = document.getElementById('post-nickname').value.trim();
    const pw = document.getElementById('post-password').value.trim();
    const cat = document.getElementById('post-category').value;
    const content = document.getElementById('post-content').value.trim();

    if (!nick || !pw || !content) {
        alert(currentLanguage === 'ko' ? "모든 필드를 입력해주세요." : "Please fill in all fields.");
        return;
    }

    if (pw.length < 4) {
        alert(currentLanguage === 'ko' ? "비밀번호는 4자리 숫자로 입력해주세요." : "Password must be 4 digits.");
        return;
    }

    const newPost = {
        id: Date.now(),
        nickname: nick,
        password: pw,
        category: cat,
        content: content,
        flag: userFlag,
        date: new Date().toISOString(),
        isAdmin: nick.toLowerCase() === 'admin' && pw === '0000' // 임시 어드민 로직
    };

    posts.unshift(newPost);
    localStorage.setItem('loungePosts', JSON.stringify(posts));
    
    // 필드 초기화
    document.getElementById('post-nickname').value = '';
    document.getElementById('post-password').value = '';
    document.getElementById('post-content').value = '';
    
    renderPosts();
}

function deletePost(id) {
    const inputPw = prompt(currentLanguage === 'ko' ? "비밀번호를 입력하세요:" : "Enter password:");
    if (inputPw === null) return;

    const postIndex = posts.findIndex(p => p.id === id);
    if (postIndex > -1) {
        if (posts[postIndex].password === inputPw) {
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
        if (btn.innerText.includes(category) || (category === 'All' && btn.getAttribute('data-i18n') === 'cat-all')) {
            btn.classList.add('active');
        }
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
    container.innerHTML = '';

    const filtered = currentFilter === 'All' ? posts : posts.filter(p => p.category === currentFilter);

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#999; padding:40px;">${currentLanguage === 'ko' ? '작성된 글이 없습니다.' : 'No posts yet.'}</p>`;
        return;
    }

    filtered.forEach(p => {
        const dateStr = new Date(p.date).toLocaleString(currentLanguage === 'ko' ? 'ko-KR' : 'en-US', {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-header">
                <div class="user-info">
                    <span class="flag-icon">${p.flag}</span>
                    <span>${p.nickname}</span>
                    ${p.isAdmin ? '<span style="color:var(--primary-color); font-size:0.7rem; border:1px solid var(--primary-color); padding:1px 4px; border-radius:4px;">ADMIN</span>' : ''}
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="category-tag">${p.category}</span>
                    <button class="translate-btn" onclick="translateText(${p.id})">Translate</button>
                </div>
            </div>
            <div class="post-content">${p.content}</div>
            <div class="post-footer">
                <span>${dateStr}</span>
                <span class="delete-btn" onclick="deletePost(${p.id})">Delete</span>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    detectUserCountry();
    renderPosts();
});
