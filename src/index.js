import './index.css';
import './main.scss';

import Logo from '../assets/programmer.svg';

import printMe from "./print";

function createElement() {
    const element = document.createElement('div');
    element.classList.add('greetings');
    element.innerText = 'Hello from Webpack';

    const myLogo = new Image(50, 50);
    myLogo.src = Logo;
    element.insertAdjacentElement('beforeend', myLogo);

    return element;
}

document.body.appendChild(createElement());
printMe();
