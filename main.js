    const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
    const tabsItems = document.querySelectorAll('.tabs__item');

    tabsBtn.forEach(cliceid);

    function cliceid(item) {

        item.addEventListener('click', function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {

                tabsBtn.forEach(function(item) {
                    item.classList.remove('active');
                });

                tabsItems.forEach(function(item) {
                    item.classList.remove('active');
                })

                currentBtn.classList.add('active');
                currentTab.classList.add('active');

            }

        })
        document.querySelector('.tabs__nav-btn:nth-child(2)').click();

    };


    function swiper() {
        var swiper = new Swiper('.swiper1', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });

        var swiper2 = new Swiper('.swiper2', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },

        });

        var swiper = new Swiper('.swiper3', {
            slidesPerView: 1,
            spaceBetween: 10,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }
        });
    }
    swiper();

    function toggle() {
        const btn = document.querySelector('.breadcrumb');
        btn.classList.toggle('active');
    }

    function toggleMenu() {
        const btn = document.querySelector('.open2');
        const menu = document.querySelector('.toggleMenu');
        btn.classList.toggle('active');
        menu.classList.toggle('active');
    }