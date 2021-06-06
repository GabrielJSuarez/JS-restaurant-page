export const MENU_CONTENT = () => {
    const home = document.querySelector('#tab-home');
    const menu = document.querySelector('#tab-menu');
    const contact = document.querySelector('#tab-contact');
    const main = document.querySelector('#main');
    const navigation = document.querySelector('#navigation');

   navigation.addEventListener('click', (e) => {
        if (e.target.textContent === 'Menu' && (!menu.classList.contains('active'))) {
            menu.classList.add('active', 'fw-bold');
            home.classList.remove('active', 'fw-bold');
            contact.classList.remove('active', 'fw-bold');
            main.innerHTML = `
                <div class="d-flex flex-column flex-wrap">
                    <h2 class="contact-title fw-bold mb-5 text-center">See our Menu!</h2>
                
                    <div class="card mb-3 w-75">
                      <div class="row g-0">
                        <div class="col-md-4 d-flex flex-column justify-content-center">
                          <div class="sushi-image bg-image"></div>
                        </div>
                        <div class="col-md-8 ps-4">
                          <div class="card-body">
                            <h5 class="card-title title-primary fw-bold">Sushi Rolls</h5>
                            <p class="card-text text-main pt-2 w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-sushi text-white">Place Order!</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="card mb-3 w-75 align-self-end">
                      <div class="row g-0">
                        <div class="col-md-8 pe-4">
                          <div class="card-body d-flex flex-column align-items-end">
                            <h5 class="card-title title-primary fw-bold text-end">Sashimi Sushi</h5>
                            <p class="card-text text-main pt-2 text-end w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-sushi text-white">Place Order!</a>
                          </div>
                        </div>
                        <div class="col-md-4 d-flex flex-column justify-content-center">
                          <div class="sashimi-image bg-image"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="card mb-3 w-75">
                      <div class="row g-0">
                        <div class="col-md-4 d-flex flex-column justify-content-center">
                          <div class="tempura-image bg-image"></div>
                        </div>
                        <div class="col-md-8 ps-4">
                          <div class="card-body">
                            <h5 class="card-title title-primary fw-bold">Tempura</h5>
                            <p class="card-text text-main pt-2 w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-sushi text-white">Place Order!</a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            `;
        }
    })
}