$(() => {
	// $('.custom-dropdown').on('mouseenter', () => {
	// 	$('.dropdown-toggle').dropdown('toggle')
	// })

	$('.main-grid .card').each((index, element) => {
		$(element).on('mouseenter', () => {
			$('.main-grid .card .card-image .layer-' + index).addClass('show-card-layer')
		})

		$(element).on('mouseleave', () => {
			$('.main-grid .card .card-image .layer-' + index).toggleClass('show-card-layer')
		})
	})

	// if (document.documentElement.scrollTop >= 300) {
	// 	$('.custom-navbar').animate({padding: '.3rem 1rem'}, 100, 'linear')
	// } else {
	// 	$('.custom-navbar').animate({padding: '1rem'}, 100, 'linear')
	// }

	// $(window).on('scroll', () => {
	// 	if (document.documentElement.scrollTop >= 300) {
	// 		$('.custom-navbar').animate({padding: '.3rem 1rem'}, 100, 'linear')
	// 	} else {
	// 		$('.custom-navbar').animate({padding: '1rem'}, 100, 'linear')
	// 	}
	// })

	if (document.documentElement.scrollTop >= 300) {
		$('.custom-navbar').addClass('short-navbar')
	} else {
		$('.custom-navbar').removeClass('short-navbar')
	}

	$(window).on('scroll', () => {
		if (document.documentElement.scrollTop >= 300) {
			$('.custom-navbar').addClass('short-navbar')
		} else {
			$('.custom-navbar').removeClass('short-navbar')
		}
	})

	$('.main-slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '10%',
		pauseOnFocus: false,
		pauseOnHover: false,
		autoplaySpeed: 950,
		autoplay: true,
		easing: 'linear',
		// fade: false,
		responsive: [
		    {
		        breakpoint: 1400,
		        settings: {
		            arrows: false,
		            centerPadding: '8%'
		        }
		    },
		    {
		        breakpoint: 900,
		        settings: {
		            arrows: false,
		            centerPadding: '5%'
		        }
		    },
		    {
		        breakpoint: 400,
		        settings: {
		            arrows: false,
		            centerMode: false
		        }
		    }
		]
	})
})