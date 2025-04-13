document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            document.querySelectorAll('header nav ul li a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('main section');
    const headerHeight = document.querySelector('header').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50;
        if (scrollY >= sectionTop) {
            current = '#' + section.getAttribute('id');
        }
    });

    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });

    if (window.scrollY < sections[0].offsetTop - headerHeight - 50) {
        document.querySelectorAll('header nav ul li a').forEach(link => link.classList.remove('active'));
        document.querySelector('header nav ul li a[href="#hero"]').classList.add('active');
    }
});