import './index.css';

function createElement() {
    const element = document.createElement('div');
    element.innerText = 'Hello from Webpack';
    return element;
}

document.body.appendChild(createElement());
