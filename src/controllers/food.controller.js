import views from "../views/food.html";

export default () => {
    const $div = document.createElement('div')

    $div.innerHTML = views

    return $div
}