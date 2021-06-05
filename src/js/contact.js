export const CONTACT_CONTENT = () => {
    const MAIN_CONTENT = document.querySelector('#main');
    const NAVIGATION = document.querySelector('#navigation');

    NAVIGATION.addEventListener('click', (e) => {
        if (e.target.textContent === 'Contact') {
            MAIN_CONTENT.innerHTML = `
                <p>ANOTHER TEST!</p>
            `;
        }
    })
}