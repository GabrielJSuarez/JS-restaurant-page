export const MENU_CONTENT = () => {
    const MAIN_CONTENT = document.querySelector('#main');
    const NAVIGATION = document.querySelector('#navigation');

    NAVIGATION.addEventListener('click', (e) => {
        if (e.target.textContent === 'Menu') {
            MAIN_CONTENT.innerHTML = `
                <p>TEST!</p>
            `;
        }
    })
}