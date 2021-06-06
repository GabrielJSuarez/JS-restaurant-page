export const CONTACT_CONTENT = () => {
    const home = document.querySelector('#tab-home');
    const menu = document.querySelector('#tab-menu');
    const contact = document.querySelector('#tab-contact');
    const main = document.querySelector('#main');
    const navigation = document.querySelector('#navigation');

    navigation.addEventListener('click', (e) => {
        if (e.target.textContent === 'Contact' && (!contact.classList.contains('active'))) {
            contact.classList.add('active');
            home.classList.remove('active');
            menu.classList.remove('active');
            main.innerHTML = `
                <p>ANOTHER TEST!</p>
            `;
        }
    })
}