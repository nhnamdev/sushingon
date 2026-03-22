// Hero Swiper
const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    autoplay: { delay: 6000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 1200,
});

// Header: transparent → solid on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
});

// Back to top
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 300);
});
backToTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = header.offsetHeight;
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });

            // Close mobile menu
            const nav = document.querySelector('#mainNav');
            if (nav && nav.classList.contains('show')) {
                bootstrap.Collapse.getInstance(nav)?.hide();
            }
        }
    });
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// Scroll reveal for feature boxes
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.feature-box').forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(30px)';
    box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(box);
});

// Language Switcher
const translations = {
    vi: {
        nav: {
            home: 'Trang Chủ',
            about: 'Về Chúng Tôi',
            menu: 'Thực Đơn',
            reservation: 'Sự Đặt Chỗ',
            contact: 'Liên Hệ',
            order: 'ĐẶT HÀNG TRỰC TUYẾN',
            duckbox: 'HỘP VỊT QUAY BẮC KINH'
        },
        hero: {
            text: 'TƯƠI NGON, NHẸ NHÀNG, HẤP DẪN – ĐÓ LÀ ẨM<br>THỰC CHÂU Á CỦA GLORY DUCK.',
            subtext: 'ĐẶT HÀNG TRỰC TUYẾN NGAY ĐỂ MANG VỀ &<br>GIAO HÀNG TẬN NƠI HOẶC CHỌN HỘP VỊT QUAY<br>BẮC KINH CỦA CHÚNG TÔI.',
            btn1: 'CỬA HÀNG TRỰC TUYẾN',
            btn2: 'Đặt bàn'
        },
        about: {
            title1: 'Điểm Nhấn Streetfood',
            title2: 'tại Berlin-Friedrichshain',
            text: 'Nhân vật chính và điểm nhấn của nhà hàng chúng tôi là con vịt, con vịt vinh quang. Trong không gian hiện đại, được trang trí theo phong cách nhà hàng Streetfood Việt Nam, chúng tôi tập trung vào việc chế biến vịt theo phong cách truyền thống bên cạnh các món Việt Nam và châu Á kinh điển. Nguyên liệu tươi và chất lượng cao được chế biến riêng lẻ trong chảo wok và phục vụ bởi đội ngũ phục vụ tận tâm của chúng tôi.'
        },
        features: {
            quality: { title: '100% Chất Lượng', text: 'Cam kết chất lượng: Từ những nguyên liệu được chọn lọc kỹ càng, các món ăn châu Á được chế biến tươi ngon.' },
            space: { title: 'Không Gian Đặc Sắc', text: 'Glory Duck hiện đại và đặc trưng Việt Nam tại Berlin-Friedrichshain – hãy để bạn bị bất ngờ' },
            service: { title: 'Dịch Vụ Cá Nhân', text: 'Đồ ăn ngon cần dịch vụ hoàn hảo – hãy để đội ngũ phục vụ của chúng tôi tư vấn và chiều đãi bạn.' }
        },
        menu: {
            title: 'Vịt Trái Cây – Vịt Giòn – Glory Duck Berlin',
            btn: 'Thực Đơn'
        },
        reservation: {
            feature1: { title: 'Món Ăn Ngon', text: 'Vịt theo cách khác? Giòn, mọng nước và gần như không có chất béo – đó là cách chế biến Việt Nam và đặc sản của Glory Duck tại Friedrichshain' },
            feature2: { title: 'Không Gian Sang Trọng', text: 'Thoải mái là một phần của niềm vui – không gian Việt Nam đặc trưng của chúng tôi đưa bạn vào thế giới ẩm thực châu Á.' },
            btn: 'Đặt Bàn Ngay'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            menu: 'Menu',
            reservation: 'Reservation',
            contact: 'Contact',
            order: 'ORDER ONLINE',
            duckbox: 'PEKING DUCK BOX'
        },
        hero: {
            text: 'FRESH, LIGHT, ATTRACTIVE – THAT\'S<br>GLORY DUCK\'S ASIAN CUISINE.',
            subtext: 'ORDER ONLINE NOW FOR TAKEAWAY &<br>DELIVERY OR CHOOSE OUR<br>PEKING DUCK BOX.',
            btn1: 'ONLINE STORE',
            btn2: 'Book a Table'
        },
        about: {
            title1: 'Streetfood Highlight',
            title2: 'in Berlin-Friedrichshain',
            text: 'The main character and highlight of our restaurant is the duck, the glory duck. In a modern space decorated in Vietnamese streetfood restaurant style, we focus on preparing duck in traditional style alongside classic Vietnamese and Asian dishes. Fresh and high-quality ingredients are individually prepared in wok pans and served by our dedicated service team.'
        },
        features: {
            quality: { title: '100% Quality', text: 'Quality commitment: From carefully selected ingredients, Asian dishes are freshly prepared.' },
            space: { title: 'Distinctive Space', text: 'Glory Duck modern and Vietnamese characteristic in Berlin-Friedrichshain – let yourself be surprised' },
            service: { title: 'Personal Service', text: 'Good food needs perfect service – let our service team advise and pamper you.' }
        },
        menu: {
            title: 'Fruit Duck – Crispy Duck – Glory Duck Berlin',
            btn: 'Menu'
        },
        reservation: {
            feature1: { title: 'Delicious Food', text: 'Duck in a different way? Crispy, juicy and almost fat-free – that\'s the Vietnamese preparation and specialty of Glory Duck in Friedrichshain' },
            feature2: { title: 'Luxurious Space', text: 'Comfort is part of the pleasure – our distinctive Vietnamese space takes you into the world of Asian cuisine.' },
            btn: 'Book Now'
        }
    },
    de: {
        nav: {
            home: 'Startseite',
            about: 'Über Uns',
            menu: 'Speisekarte',
            reservation: 'Reservierung',
            contact: 'Kontakt',
            order: 'ONLINE BESTELLEN',
            duckbox: 'PEKINGENTE BOX'
        },
        hero: {
            text: 'FRISCH, LEICHT, ATTRAKTIV – DAS IST<br>DIE ASIATISCHE KÜCHE VON GLORY DUCK.',
            subtext: 'JETZT ONLINE BESTELLEN FÜR ABHOLUNG &<br>LIEFERUNG ODER WÄHLEN SIE UNSERE<br>PEKINGENTE BOX.',
            btn1: 'ONLINE SHOP',
            btn2: 'Tisch Reservieren'
        },
        about: {
            title1: 'Streetfood Highlight',
            title2: 'in Berlin-Friedrichshain',
            text: 'Die Hauptfigur und das Highlight unseres Restaurants ist die Ente, die Glory Duck. In einem modernen Raum, der im Stil eines vietnamesischen Streetfood-Restaurants eingerichtet ist, konzentrieren wir uns auf die Zubereitung von Ente im traditionellen Stil neben klassischen vietnamesischen und asiatischen Gerichten. Frische und hochwertige Zutaten werden einzeln im Wok zubereitet und von unserem engagierten Service-Team serviert.'
        },
        features: {
            quality: { title: '100% Qualität', text: 'Qualitätsverpflichtung: Aus sorgfältig ausgewählten Zutaten werden asiatische Gerichte frisch zubereitet.' },
            space: { title: 'Besonderer Raum', text: 'Glory Duck modern und vietnamesisch charakteristisch in Berlin-Friedrichshain – lassen Sie sich überraschen' },
            service: { title: 'Persönlicher Service', text: 'Gutes Essen braucht perfekten Service – lassen Sie sich von unserem Service-Team beraten und verwöhnen.' }
        },
        menu: {
            title: 'Fruchtente – Knusprige Ente – Glory Duck Berlin',
            btn: 'Speisekarte'
        },
        reservation: {
            feature1: { title: 'Leckeres Essen', text: 'Ente mal anders? Knusprig, saftig und fast fettfrei – das ist die vietnamesische Zubereitung und Spezialität von Glory Duck in Friedrichshain' },
            feature2: { title: 'Luxuriöser Raum', text: 'Komfort ist Teil des Vergnügens – unser charakteristischer vietnamesischer Raum entführt Sie in die Welt der asiatischen Küche.' },
            btn: 'Jetzt Buchen'
        }
    }
};

let currentLang = 'vi';

function switchLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update nav
    document.querySelectorAll('.nav-menu .nav-link').forEach((link, i) => {
        const keys = ['home', 'about', 'menu', 'reservation', 'contact', 'order', 'duckbox'];
        if (keys[i]) link.textContent = t.nav[keys[i]];
    });
    
    // Update hero
    document.querySelectorAll('.hero-text').forEach(el => el.innerHTML = t.hero.text);
    document.querySelectorAll('.hero-subtext').forEach(el => el.innerHTML = t.hero.subtext);
    document.querySelectorAll('.hero-buttons .btn-hero:first-child').forEach(el => el.textContent = t.hero.btn1);
    document.querySelectorAll('.hero-buttons .btn-hero:last-child').forEach(el => el.textContent = t.hero.btn2);
    
    // Update about
    document.querySelector('.about-section .section-title h2').textContent = t.about.title1;
    document.querySelector('.about-section .section-title h3').textContent = t.about.title2;
    document.querySelector('.about-section p').textContent = t.about.text;
    
    // Update features
    const featureBoxes = document.querySelectorAll('.features-section .feature-box');
    featureBoxes[0].querySelector('h3').textContent = t.features.quality.title;
    featureBoxes[0].querySelector('p').textContent = t.features.quality.text;
    featureBoxes[1].querySelector('h3').textContent = t.features.space.title;
    featureBoxes[1].querySelector('p').textContent = t.features.space.text;
    featureBoxes[2].querySelector('h3').textContent = t.features.service.title;
    featureBoxes[2].querySelector('p').textContent = t.features.service.text;
    
    // Update menu
    document.querySelector('.menu-section .section-title h2').textContent = t.menu.title;
    document.querySelector('.menu-section .btn-hero').textContent = t.menu.btn;
    
    // Update reservation
    const resFeatures = document.querySelectorAll('.reservation-section .feature-box');
    resFeatures[0].querySelector('h3').textContent = t.reservation.feature1.title;
    resFeatures[0].querySelector('p').textContent = t.reservation.feature1.text;
    resFeatures[1].querySelector('h3').textContent = t.reservation.feature2.title;
    resFeatures[1].querySelector('p').textContent = t.reservation.feature2.text;
    document.querySelector('.reservation-section .btn-hero').textContent = t.reservation.btn;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Language button click handlers
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});
