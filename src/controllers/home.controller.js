import views from '../views/home.html'

export default () => {
    const $div = document.createElement('div')

    $div.innerHTML = views

    return $div
}