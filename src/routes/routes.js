import { view } from '../controller/views.controller';
import slider from '../components/slider';

export function router () {
	let $container = document.querySelector('#container-route'),
		{ hash } = location;

	$container.innerHTML = null;

	if (!hash || hash === '#/') {
		$container.innerHTML = view('home');

	} else if (hash === '#/habitat') {
		$container.innerHTML = view('habitat');

	} else if (hash === '#/breding') {
		$container.innerHTML = view('breding');
		slider();

	} else if (hash === '#/food') {
		$container.innerHTML = view('food');

	} else {
		$container.innerHTML = view();
	}
};