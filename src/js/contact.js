export const CONTACT_CONTENT = () => {
    const home = document.querySelector('#tab-home');
    const menu = document.querySelector('#tab-menu');
    const contact = document.querySelector('#tab-contact');
    const main = document.querySelector('#main');
    const navigation = document.querySelector('#navigation');

    navigation.addEventListener('click', (e) => {
        if (e.target.textContent === 'Contact' && (!contact.classList.contains('active'))) {
            contact.classList.add('active', 'fw-bold');
            home.classList.remove('active', 'fw-bold');
            menu.classList.remove('active', 'fw-bold');
            main.innerHTML = `
                <div class="container text-center">
                    <h2 class="contact-title fw-bold mb-5">Contact Us!</h2>
                    
                    <form class="w-50 mx-auto mb-5">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label title-primary fw-bold">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text title-primary">We'll never share your email with anyone else.</div>
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label title-primary fw-bold">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <button type="submit" class="btn btn-sushi text-white">Send Message!</button>
                    </form>
                </div>
            `;
        }
    })
}

export default { CONTACT_CONTENT };