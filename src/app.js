import './css/styles.scss';
import { router } from './routes/routes';
import hamburgerMenu from './components/hamburger_menu';

document.addEventListener('DOMContentLoaded', () => {
	router();

	hamburgerMenu('.panel-btn', '.panel', '.menu a');
});

window.addEventListener('hashchange', router);