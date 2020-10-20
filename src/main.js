import './css/styles.scss';
import { router } from './routes/index.routes';

router('#/')

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})