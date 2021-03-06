// Import styles
import '../styles/style.scss';

// Import images
import hero from '../images/hero.jpg';

// Import Scripts
import { MENU_CONTENT } from './menu';
import { CONTACT_CONTENT } from './contact';

// First Layout
(() => {
  const CONTAINER = document.querySelector('#content');

  CONTAINER.innerHTML = `
    <!-- Hero -->
    <div class="card bg-dark text-white">
      <img src="${hero}" class="card-img hero-img" alt="Hero">
      <div class="card-img-overlay d-flex justify-content-center align-items-end">
        <h1 class="card-title fw-bold">Kamikaze Sushi</h1>
      </div>
    </div>
    
    <!-- Navigation -->
    <div class="d-flex justify-content-center py-3">
        <ul id="navigation" class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
                <a id="tab-home" class="nav-link title-primary active fw-bold" aria-current="true" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a id="tab-menu" class="nav-link title-primary" href="#">Menu</a>
            </li>
            <li class="nav-item">
                <a id="tab-contact" class="nav-link title-primary" href="#">Contact</a>
            </li>
        </ul>
    </div>
    
    <!-- Main Content -->
    <main id ="main" class="d-flex flex-column flex-wrap mt-4">
        <h2 class="contact-title fw-bold mb-5 text-center">Welcome!</h2>
        
        <div class="card mb-3 w-75">
          <div class="row g-0">
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <div class="sushi_1 bg-image"></div>
            </div>
            <div class="col-md-8 ps-4">
              <div class="card-body">
                <h5 class="card-title title-primary fw-bold">The Best Sushi In Town!</h5>
                <p class="card-text text-main pt-2 w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card mb-3 w-75 align-self-end">
          <div class="row g-0">
            <div class="col-md-8  pe-4">
              <div class="card-body d-flex flex-column align-items-end">
                <h5 class="card-title title-primary fw-bold text-end">The Most Affordable Prices!</h5>
                <p class="card-text text-main pt-2 text-end w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <div class="sushi_2 bg-image"></div>
            </div>
          </div>
        </div>
        
        <div class="card mb-3 w-75">
          <div class="row g-0">
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <div class="sushi_3 bg-image"></div>
            </div>
            <div class="col-md-8 ps-4">
              <div class="card-body">
                <h5 class="card-title title-primary fw-bold">Our Locations are always near!</h5>
                <p class="card-text text-main pt-2 w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card mb-3 w-75 align-self-end">
          <div class="row g-0">
            <div class="col-md-8 pe-4">
              <div class="card-body d-flex flex-column align-items-end">
                <h5 class="card-title title-primary fw-bold">Delivery! One click away</h5>
                <p class="card-text text-main pt-2 w-75 text-end">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <div class="sushi_4 bg-image"></div>
            </div>
          </div>
        </div>
    </main>
`;
})();

// Layout when clicking home
const HOME_CONTENT = () => {
  const home = document.querySelector('#tab-home');
  const menu = document.querySelector('#tab-menu');
  const contact = document.querySelector('#tab-contact');
  const main = document.querySelector('#main');
  const navigation = document.querySelector('#navigation');

  navigation.addEventListener('click', (e) => {
    if (e.target.textContent === 'Home' && (!home.classList.contains('active'))) {
      home.classList.add('active', 'fw-bold');
      menu.classList.remove('active', 'fw-bold');
      contact.classList.remove('active', 'fw-bold');
      main.innerHTML = `
                <!-- Main Content -->
                <main id ="main" class="d-flex flex-column flex-wrap mt-4">
        <h2 class="contact-title fw-bold mb-5 text-center">Welcome!</h2>
        
        <div class="card mb-3 w-75">
          <div class="row g-0">
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <div class="sushi_1 bg-image"></div>
            </div>
            <div class="col-md-8 ps-4">
              <div class="card-body">
                <h5 class="card-title title-primary fw-bold">The Best Sushi In Town!</h5>
                <p class="card-text text-main pt-2 w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card mb-3 w-75 align-self-end">
          <div class="row g-0">
            <div class="col-md-8  pe-4">
              <div class="card-body d-flex flex-column align-items-end">
                <h5 class="card-title title-primary fw-bold text-end">The Most Affordable Prices!</h5>
                <p class="card-text text-main pt-2 text-end w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <div class="sushi_2 bg-image"></div>
            </div>
          </div>
        </div>
        
        <div class="card mb-3 w-75">
          <div class="row g-0">
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <div class="sushi_3 bg-image"></div>
            </div>
            <div class="col-md-8 ps-4">
              <div class="card-body">
                <h5 class="card-title title-primary fw-bold">Our Locations are always near!</h5>
                <p class="card-text text-main pt-2 w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card mb-3 w-75 align-self-end">
          <div class="row g-0">
            <div class="col-md-8 pe-4">
              <div class="card-body d-flex flex-column align-items-end">
                <h5 class="card-title title-primary fw-bold">Delivery! One click away</h5>
                <p class="card-text text-main pt-2 w-75 text-end">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <div class="sushi_4 bg-image"></div>
            </div>
          </div>
        </div>
    </main>
            `;
    }
  });
};

// Calls for Navigation Behaviour, rendering menu and contact content
HOME_CONTENT();
MENU_CONTENT();
CONTACT_CONTENT();