$(document).ready(function () {

	let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

	function addTouchClass() {
		// Добавление класса _touch для HTML если браузер мобильный
		if (isMobile.any()) document.documentElement.classList.add('touch');
	}

	addTouchClass();

	/* LazyLoad */
	let lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
	});


	$(".menu-toggle").click(function () {
		if ($("body").hasClass("menu--active")) {
			$("body").removeClass("menu--active");
		} else {
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
				lazyLoadInstance.update();
			},
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
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

	/* slick slider */
	/* 	if ($('.slider').length) {
			$('.slider').slick({
				arrows: true,
				infinite: false,
				dots: true,
				autoplay: true,
				fade: false,
				prevArrow: $('.arrows .btn-prev'),
				nextArrow: $('.arrows .btn-next'),
				responsive: [
					{
						breakpoint: 2560,
						settings: "unslick",
					},
					{
						breakpoint: 1200,
						settings: {
							infinite: false,
							slidesToShow: 3,
							slidesToScroll: 2,
							draggable: true,
	
						}
					},
	
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true,
	
						}
					},
	
				]
			});
		}
	 */
});

