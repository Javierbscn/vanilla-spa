import homeView from '../views/home.html';
import habitatView from '../views/habitat.html';
import bredingView from '../views/breding.html';
import foodView from '../views/food.html';
import notFoundView from '../views/notFound.html';

export function view(route) {
    let view;

    if (route === 'home') view = homeView;
    else if (route === 'habitat') view = habitatView;
    else if (route === 'breding') view = bredingView;
    else if (route === 'food') view = foodView;
    else view = notFoundView;

    return view;
}