export const NAVIGATION = () => {
    const NAVIGATION = document.querySelector("#navigation");

    NAVIGATION.addEventListener('click', function changeTab(e) {
        const TAB_HOME = document.querySelector('#tab-home');
        const TAB_MENU = document.querySelector('#tab-menu');
        const TAB_CONTACT = document.querySelector('#tab-contact');

        if (e.target.textContent === 'Home' && (!TAB_HOME.classList.contains('active'))) {
            TAB_HOME.classList.add('active');
            TAB_MENU.classList.remove('active');
            TAB_CONTACT.classList.remove('active');
        } else if (e.target.textContent === 'Menu' && (!TAB_MENU.classList.contains('active'))) {
            TAB_MENU.classList.add('active');
            TAB_HOME.classList.remove('active');
            TAB_CONTACT.classList.remove('active');
        } else if (e.target.textContent === 'Contact' && (!TAB_CONTACT.classList.contains('active'))) {
            TAB_CONTACT.classList.add('active');
            TAB_HOME.classList.remove('active');
            TAB_MENU.classList.remove('active');
        }
    });
}
