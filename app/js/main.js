$(document).ready(function () {

	let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

	function addTouchClass() {
		// Добавление класса _touch для HTML если браузер мобильный
		if (isMobile.any()) document.documentElement.classList.add('touch');
	}

	addTouchClass();

	/* LazyLoad */
	/* let lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
	}); */

	$(window).on("scroll", function () {
		setPageScroll();
	});

	function setPageScroll() {
		let scrollPx = window.scrollY;

		if (scrollPx > 50) {
			$("body").addClass("page-scrolled");
		} else {
			$("body").removeClass("page-scrolled");
		}
	}

	setPageScroll();


	/* gallery */
	if ($('.gallery__wrapper').length > 0) {
		let $grid = $('.gallery__wrapper').imagesLoaded(function () {
			$grid.isotope({
				itemSelector: '.gallery__item',
				percentPosition: true,
				masonry: {
					columnWidth: '.gallery__sizer',
					gutter: $(".gallery__gutter").width() * 2,
				},
			});

		});

		function setSecondImageHeight() {
			$('.gallery__wrapper .gallery__item:eq(1)').height($('.gallery__wrapper .gallery__item:eq(0)').height())
		}

		setSecondImageHeight();

		$(window).resize(function () {
			setSecondImageHeight();
		});
	}


	$(".menu-toggle").click(function () {
		if ($("body").hasClass("menu--active")) {
			$("body").css("overflow-y", "")
			$("body").removeClass("menu--active");
		} else {
			$("body").css("overflow-y", "hidden")
			$("body").addClass("menu--active");
		}
	})

	const heroSlider = new Swiper('.hero-slider', {
		speed: 400,
		effect: "fade",
		loop: true,
		autoplay: {
			delay: 5000,
		},
		on: {
			slideChange: function () {
				// lazyLoadInstance.update();
			},
		},
		pagination: {
			el: '.hero-pagination',
			clickable: true,
		},
	});



	/* benefits slider */
	let benefitsSlider = false;
	let benefitsSliderInit = false;

	/* our team slider */
	let ourTeamSlider = false;
	let ourTeamSliderInit = false;


	/* which media query */
	function swiperMode() {
		let queryXS = window.matchMedia('(min-width: 1px)');
		let queryS = window.matchMedia('(min-width: 576px)');
		let queryMD = window.matchMedia('(min-width: 768px)');
		let queryLG = window.matchMedia('(min-width: 992px)');
		let queryXL = window.matchMedia('(min-width: 1200px)');
		let queryXXL = window.matchMedia('(min-width: 1400px)');

		if (queryXS.matches) {
			if ($(".benefits-slider").length > 0) {
				if (!benefitsSliderInit) {
					benefitsSliderInit = true;
					benefitsSlider = new Swiper('.benefits-slider', {
						speed: 400,
						pagination: {
							el: '.benefits-pagination',
							clickable: true,
						},
					});
				}
			}

			if ($(".our-team-slider").length > 0) {
				ourTeamSlider = new Swiper('.our-team-slider', {
					speed: 400,
					effect: "slide",
					slidesPerView: 1,
					// slidesPerGroup: 2,
					spaceBetween: 10,
					navigation: {
						nextEl: '.our-team-swiper-button.swiper-button-next',
						prevEl: '.our-team-swiper-button.swiper-button-prev',
					},
					breakpoints: {
						768: {
							speed: 600,
							slidesPerView: 2,
							slidesPerGroup: 2,
							spaceBetween: 20
						},
						1400: {
							speed: 1000,
							slidesPerView: 3,
							slidesPerGroup: 3,
							spaceBetween: 30
						},
					}
				});
			}

			/* our team slider */
			/* ourTeamSliderInit = false;
			if (ourTeamSlider) {
				ourTeamSlider.destroy();
			} */

		}

		if (queryS.matches) {

		}

		if (queryMD.matches) {
			/* benefits slider */
			benefitsSliderInit = false;
			if (benefitsSlider) {
				benefitsSlider.destroy();
			}
		}

		if (queryXL.matches) {
		}
	}

	swiperMode();

	window.addEventListener('resize', function () {
		swiperMode();
	});

	const servicesSlider = new Swiper('.services-slider', {
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.services-swiper-button.swiper-button-next',
			prevEl: '.services-swiper-button.swiper-button-prev',
		},
		on: {
			slideChange: function () {
				// lazyLoadInstance.update();
			},
		},
		breakpoints: {
			768: {
				speed: 700,
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20,
			},
			992: {
				speed: 700,
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30

			},
		}
	});

	const reviewsSlider = new Swiper('.reviews-slider', {
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 20,
		autoHeight: true,
		navigation: {
			nextEl: '.reviews-swiper-button.swiper-button-next',
			prevEl: '.reviews-swiper-button.swiper-button-prev',
		},
		breakpoints: {
			768: {
				speed: 700,
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20,
			},
			1200: {
				speed: 700,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30

			},
		}
	});

	const ctaSlider = new Swiper('.cta-slider', {
		speed: 600,
		effect: "fade",
		loop: true,
		autoHeight: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.cta-pagination',
			clickable: true,
		},

	});

	$('select, input:checkbox').styler();

	function zoom(e) {
		let zoomer = e.currentTarget;
		e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
		e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
		x = offsetX / zoomer.offsetWidth * 100
		y = offsetY / zoomer.offsetHeight * 100
		zoomer.style.backgroundPosition = x + '% ' + y + '%';
	}

	if (!$("html").hasClass("touch")) {
		let galleryItems = document.querySelectorAll(".gallery__item .img-cover");
		galleryItems.forEach(image => {
			image.addEventListener("mousemove", function (e) {
				zoom(e);
			});
		});

		let beforeAfter = document.querySelectorAll(".before-after .img-cover");
		beforeAfter.forEach(image => {
			image.addEventListener("mousemove", function (e) {
				zoom(e);
			});
		});

	}


	/* accordion */
	$(".faq-item__title").on("click", function (e) {

		e.preventDefault();
		let $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".faq-item__content").slideUp(400);
			$(".faq-item__title").removeClass("accordion-active");
			$this.next().slideDown(400);
			$this.toggleClass("accordion-active");
			$this.next().slideDown(400);
		} else {
			$this.toggleClass("accordion-active");
			$this.next().slideUp(400);
		}


	});


	/* Animate On Scroll */
	/* const aos = document.querySelector('[data-aos]');

	if (aos) {
		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					if (entry.target.getAttribute('data-aos-anim-delay')) {
						let delay = entry.target.getAttribute('data-aos-anim-delay');
						setTimeout(() => {
							entry.target.classList.add('aos-animate');
						}, +delay * 1000);
					} else {
						entry.target.classList.add('aos-animate');
					}
					// if (!entry.target.getAttribute('data-aos')) {
					// entry.target.classList.add('aos-animate');
					// }

				} else {
					if (entry.target.hasAttribute('data-aos-once')) {
						return false;
					} else {
						entry.target.classList.remove('aos-animate');
					}
				}
			});
		});

		aos.forEach(aosElem => {
			observer.observe(aosElem)
		});
	} */


	/* to top btn */
	/* $('.to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
	}); */

});

