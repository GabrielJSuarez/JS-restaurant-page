export const MENU_CONTENT = () => {
    const home = document.querySelector('#tab-home');
    const menu = document.querySelector('#tab-menu');
    const contact = document.querySelector('#tab-contact');
    const main = document.querySelector('#main');
    const navigation = document.querySelector('#navigation');

   navigation.addEventListener('click', (e) => {
        if (e.target.textContent === 'Menu' && (!menu.classList.contains('active'))) {
            menu.classList.add('active');
            home.classList.remove('active');
            contact.classList.remove('active');
            main.innerHTML = `
                <p>TEST!</p>
            `;
        }
    })
}