import '../styles/style.scss';
import printMe from './tabbed.js';
import Header from '../images/pic_slide_1.jpg';

printMe();

const container = document.querySelector('#content');

container.innerHTML = `
    <img src="${Header}" alt="Header!">
    <h1 class="text-warning">HELLO WORLD!</h1>
`;