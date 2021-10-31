let slideIndex = 1;
const slideContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slideshow-container__slides');
const dots = document.querySelectorAll('.slideshow-navigation-dots__dot');
const mainCarouselContainer = document.querySelector('.slideshow-container');
let handler;

const showSlides = () => {
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
		slideContainer.classList.remove('default-bg');
		dots[i].className = dots[i].className.replace(' active', '');
	}

	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	if (slideIndex <= 0) {
		slideIndex = slides.length;
	}

	slides[slideIndex - 1].style.display = 'block';
	slideContainer.classList.add('default-bg');
	dots[slideIndex - 1].className += ' active';
};

const resumeSlideShow = () => {
	handler = setInterval(() => {
		showSlides();
		slideIndex++;
	}, 2000);
};

resumeSlideShow();

const plusSlides = (currentSlideIndex) => {
	slideIndex += currentSlideIndex;
	showSlides();
};

const currentSlide = (currentSlideIndex) => {
	slideIndex = currentSlideIndex;
	showSlides();
};

const stopSlideShow = () => {
	clearInterval(handler);
};

mainCarouselContainer.addEventListener('mouseenter', stopSlideShow);
mainCarouselContainer.addEventListener('mouseleave', resumeSlideShow);
