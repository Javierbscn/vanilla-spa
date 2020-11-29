import views from '../views/habitat.html';

export default () => {
	const $div = document.createElement('div');

	$div.innerHTML = views;

	return $div;
};