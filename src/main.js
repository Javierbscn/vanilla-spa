import './css/styles.scss';
import { router } from './routes/index.routes';
import hamburgerMenu from './controllers/index.controller';

document.addEventListener('DOMContentLoaded', () => {
    router('#/')

    hamburgerMenu('.panel-btn', '.panel', '.menu a')
})

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})