export default function slider() {
	const $slides = document.querySelectorAll('.slider-slide');

	let i = 0;

	document.addEventListener('click', (event) => {

		if (event.target.className === 'prev') {
            event.preventDefault();
            
            $slides[i].classList.remove('active');
            
			i--;

			if (i < 0) i = $slides.length - 1;

			$slides[i].classList.add('active');
		}

		if (event.target.className === 'next') {
            event.preventDefault();
            
            $slides[i].classList.remove('active');
            
			i++;

			if (i >= $slides.length) i = 0;

			$slides[i].classList.add('active');
		}
	});
}