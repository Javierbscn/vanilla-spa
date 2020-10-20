import { pages } from '../controllers/pages'

let content = document.querySelector('#container-route')

const router = async (route) => {
    content.innerHTML = ''

    switch (route) {
        case '#/':{
            return content.appendChild(pages.home())
        }

        case '#/habitat': {
            return
        }
        
        case '#/breding': {
            return
        }

        case '#/food': {
            return
        }

        default:{

        }
    }
}

export { router }