document.addEventListener("DOMContentLoaded", function () {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.75937610874938, 37.613778458539684],
            zoom: 15,
            controls: ['geolocationControl', 'zoomControl']
        },
            {
                suppressMapOpenBlock: true,
                geolocationControlSize: "large",
                geolocationControlPosition: { top: "200px", right: "20px" },
                geolocationControlFloat: 'none',
                zoomControlSize: "small",
                zoomControlFloat: "none",
                zoomControlPosition: { top: "120px", right: "20px" }
            });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark([55.75937610874938, 37.613778458539684], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map__mark.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [0, 0]
        });
        myMap.geoObjects.add(myPlacemark);
    }


    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 1300,
        autoplay: {
            delay: 3800,

        },
    });


    let gallerySlider = new Swiper(".gallery__slides-container", {
        slidesPerView: 3,
        speed: 1300,
        slidesPerGroup: 3,
        grid: {
            rows: 1,
            fill: "row"
        },
        pagination: {
            el: ".gallery__pagination",
            type: "fraction"
        },
        navigation: {
            nextEl: ".gallery__button-next",
            prevEl: ".gallery__button-prev"
        },

        breakpoints: {
            100: {
                slidesPerView: 1,
                spaceBetween: 38,
                slidesPerGroup: 1
            },

            600: {
                slidesPerView: 2,
                spaceBetween: 38,
                slidesPerGroup: 2
            },

            800: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2
            },

            1440: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3
            },
        },

        a11y: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },

        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
            init: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            },
            slideChange: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            }
        }
    });

    let eventsSlider = new Swiper(".events__swiper-slides", {
        slidesPerView: 1,
        speed: 1300,
        grid: {
            rows: 1,
            fill: "row"
        },
        spaceBetween: 50,
        pagination: {
            el: ".events__pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".events__button-next",
            prevEl: ".events__button-prev"
        },

        breakpoints: {
            100: {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },

            600: {
                slidesPerView: 2,
                spaceBetween: 32,
                slidesPerGroup: 2,
            },

            900: {
                slidesPerView: 3,
                spaceBetween: 25,
                slidesPerGroup: 3,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
            }

        }
    })


    let proectsSlider = new Swiper(".proects__swiper-slides", {
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: "row"
        },
        spaceBetween: 20,
        navigation: {
            nextEl: ".proects__button-next",
            prevEl: ".proects__button-prev"
        },

        breakpoints: {

            100: {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },

            600: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            800: {
                slidesPerView: 2,
                spaceBetween: 50
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        },


    });

    const selector = document.querySelector(".choices")

    const choices = new Choices(selector, {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices .gallery_choices',
        },
    });

    (() => {
        new Accordion(".js-accordion-container", {
            openOnInit: [0]
        });
    })();

    const params = {
        tabsClass: "js-tab-btn",
        wrap: "js-tabs-wrap",
        content: "js-tab-content",
        active: "active"
    };

    function setTabs(params) {
        const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

        function onTabClick(e) {
            e.preventDefault();
            const path = this.dataset.path;
            const wrap = this.closest(`.${params.wrap}`);
            const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
            const contents = wrap.querySelectorAll(`.${params.content}`);

            contents.forEach((el) => {
                el.classList.remove(params.active);
            });

            currentContent.classList.add(params.active);

            tabBtns.forEach((el) => {
                el.classList.remove(params.active);
            });

            this.classList.add(params.active);
        }

        tabBtns.forEach(function (el) {
            el.addEventListener("click", onTabClick);
        });
    }

    setTabs(params);


    let phone = document.querySelector("input[type='tel']")
    var im = new Inputmask("+7 (999) 999-99-99")
    im.mask(phone);


    const validation = new JustValidate('.contacts__form');

    colorWrong: '#D11616'

    validation
        .addField('.name', [{
            rule: 'minLength',
            value: 3,
            errorMessage: "Минимум 3 символа"
        },

        ])
        .addField('.tel', [{
            rule: "minLength",
            value: 11,
            errorMessage: "Должен содержать 11 цифр",
            function: "Вы не ввели телефон",
            function: (name, value) => {
                const ph = phone.inputmask.unmaskedvalue();
                return Number(ph) && ph.length === 10;
            },
        }]);


    const params1 = {
        btnClassName: "js-header-dropdown-btn",
        dropClassName: "js-header-drop",
        activeClassName: "is-active",
        disabledClassName: "is-disabled"
    };

    function onDisable(evt) {
        if (evt.target.classList.contains(params1.disabledClassName)) {
            evt.target.classList.remove(
                params1.disabledClassName,
                params1.activeClassName
            );
            evt.target.removeEventListener("animationend", onDisable);
        }
    }

    function setMenuListener() {
        document.body.addEventListener("click", (evt) => {
            const activeElements = document.querySelectorAll(
                `.${params1.btnClassName}.${params1.activeClassName}, .${params1.dropClassName}.${params1.activeClassName}`
            );

            if (
                activeElements.length &&
                !evt.target.closest(`.${params1.activeClassName}`)
            ) {
                activeElements.forEach((current) => {
                    if (current.classList.contains(params1.btnClassName)) {
                        current.classList.remove(params1.activeClassName);
                    } else {
                        current.classList.add(params1.disabledClassName);
                    }
                });
            }

            if (evt.target.closest(`.${params1.btnClassName}`)) {
                const btn = evt.target.closest(`.${params1.btnClassName}`);
                const path = btn.dataset.path;
                const drop = document.querySelector(
                    `.${params1.dropClassName}[data-target="${path}"]`
                );

                btn.classList.toggle(params1.activeClassName);

                if (!drop.classList.contains(params1.activeClassName)) {
                    drop.classList.add(params1.activeClassName);
                    drop.addEventListener("animationend", onDisable);
                } else {
                    drop.classList.add(params1.disabledClassName);
                }
            }
        });
    }

    setMenuListener();

    let burger = document.querySelector('.header__burger');
    let menu = document.querySelector('.header__nav');
    let menuLinks = menu.querySelectorAll('.header__nav-link');

    burger.addEventListener('click',

        function () {

            burger.classList.toggle('header__burger--active');

            menu.classList.toggle('header__nav--active');

            menu.style.transition = 'visibility 0.3s ease-in-out, transform 0.3s ease-in-out';

            document.body.classList.toggle('stop-scroll');

        });

    menu.addEventListener('transitionend', function () {
        if (!menu.classList.contains('header__nav--active')) {
            menu.removeAttribute('style');
        }
    });

    menuLinks.forEach(function (el) {
        el.addEventListener('click', function () {

            burger.classList.remove('header__burger--active');

            menu.classList.remove('header__nav--active');

            document.body.classList.remove('stop-scroll');

        });
    });

    function setSearch(params) {
        const openBtn = document.querySelector(`.${params.openBtnClass}`);
        const search = document.querySelector(`.${params.searchClass}`);
        const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

        search.addEventListener("animationend", function (evt) {
            if (this._isOpened) {
                this.classList.remove(params.activeClass);
                this.classList.remove(params.hiddenClass);
                this._isOpened = false;
            } else {
                this._isOpened = true;
            }
        });

        search.addEventListener('click', function (evt) {
            evt._isSearch = true;
        });

        openBtn.addEventListener("click", function (evt) {
            this.disabled = true;

            if (!search.classList.contains(params.activeClass) &&
                !search.classList.contains(params.hiddenClass)
            ) {
                search.classList.add(params.activeClass);
            }
        });

        closeBtn.addEventListener('click', function () {
            openBtn.disabled = false;
            search.classList.add(params.hiddenClass);
        });

        document.body.addEventListener('click', function (evt) {
            if (!evt._isSearch && search._isOpened) {
                openBtn.disabled = false;
                search.classList.add(params.hiddenClass);
            }
        });
    }

    setSearch({
        openBtnClass: "js-open-search",
        closeBtnClass: "js-close",
        searchClass: "js-form",
        activeClass: "is-opened",
        hiddenClass: "is-closed"
    });

    const anchors = document.querySelectorAll('.header__nav a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    tippy('.marker-1', {
        content: 'Пример современных тенденций - современная методология разработки',
        theme: 'purple',
    });

    tippy('.marker-2', {
        content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
        theme: 'purple',
    });

    tippy('.marker-3', {
        content: 'В стремлении повысить качество',
        theme: 'purple',
    });
})