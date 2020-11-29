import { pages } from '../controllers/pages';
import slider from '../components/slider';

export function router () {
	let $container = document.querySelector('#container-route'),
		{ hash } = location;

	$container.innerHTML = null;

	if (!hash || hash === '#/') {
		$container.appendChild(pages.home());

	} else if (hash === '#/habitat') {
		$container.appendChild(pages.habitat());

	} else if (hash === '#/breding') {
		$container.appendChild(pages.breding());
		slider();

	} else if (hash === '#/food') {
		$container.appendChild(pages.food());

	} else {
		$container.appendChild(pages.notFound());
	}
};