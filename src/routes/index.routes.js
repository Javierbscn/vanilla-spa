import { pages } from '../controllers/pages';
import slider from '../js/slider';

let content = document.querySelector('#container-route');

const router = (route) => {
	content.innerHTML = '';

	switch (route) {
		case '#/': {
			return content.appendChild(pages.home());
		}

		case '#/habitat': {
			return content.appendChild(pages.habitat());
		}

		case '#/breding': {
			return content.appendChild(pages.breding()) && slider();
		}

		case '#/food': {
			return content.appendChild(pages.food());
		}

		default: {
			return content.appendChild(pages.notFound());
		}
	}
};

export { router };