// Кнопка "Наверх"
window.onscroll = function() {
    const btn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

document.getElementById('scrollTopBtn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Простой счётчик посещений (на основе localStorage)
function updateCounter() {
    let visits = localStorage.getItem('page_visits');
    if (visits === null) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    localStorage.setItem('page_visits', visits);
    document.getElementById('visit-counter').textContent = visits;
}


function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}


function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto'; 
    
}

window.onclick = function(event) {
    if (event.target.className === 'modal-overlay') {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            if (modal.style.display === 'flex') {
                closeModal(modal.id);
            }
        });
    }
});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backBtn = document.querySelector(".back-corner-btn");
    const topBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        if (backBtn) backBtn.style.display = "flex";
        if (topBtn) topBtn.style.display = "block";
    } else {
        if (backBtn) backBtn.style.display = "none";
        if (topBtn) topBtn.style.display = "none";
    }
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const topBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if (topBtn) topBtn.style.display = "block";
    } else {
        if (topBtn) topBtn.style.display = "none";
    }
}

function controlButtons() {
    const backBtn = document.querySelector(".back-corner-btn");
    const topBtn = document.getElementById("scrollTopBtn");
    const isMobile = window.innerWidth <= 768; 

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        if (backBtn && !isMobile) backBtn.style.display = "flex";
        if (topBtn) topBtn.style.display = "block";
    } else {
        if (backBtn) backBtn.style.display = "none";
        if (topBtn) topBtn.style.display = "none";
    }
}

window.onload = updateCounter;