import './index.css';
import './main.scss';

function createElement() {
    const element = document.createElement('div');
    element.classList.add('greetings');
    element.innerText = 'Hello from Webpack';
    return element;
}

document.body.appendChild(createElement());
