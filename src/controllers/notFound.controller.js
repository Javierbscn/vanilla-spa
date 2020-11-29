import views from '../views/notFound.html';

export default () => {
	const $div = document.createElement('div');

	$div.innerHTML = views;

	return $div;
};