import '../styles/style.scss';
import printMe from './tabbed.js';
import sushi_1 from '../images/sushi_1.jpg';
import sushi_2 from '../images/sushi_2.jpg';
import sushi_3 from '../images/sushi_3.jpg';
import sushi_4 from '../images/sushi_4.jpg';
import hero from '../images/hero.jpg';

printMe();

const container = document.querySelector('#content');

container.innerHTML = `
  
    <div class="card bg-dark text-white">
      <img src="${hero}" class="card-img hero-img" alt="Hero">
      <div class="card-img-overlay d-flex justify-content-center align-items-end">
        <h1 class="card-title fw-bold">Kamikaze Sushi</h1>
      </div>
    </div>
    
    <main class="d-flex flex-column flex-wrap mt-3">
        <div class="card mb-3 w-75">
          <div class="row g-0">
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <img class="w-100" src="${sushi_1}" alt="Picture of sushi">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title title-primary fw-bold">The Best Sushi In Town!</h5>
                <p class="card-text text-main pt-2 w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card mb-3 w-75 align-self-end">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body d-flex flex-column align-items-end">
                <h5 class="card-title title-primary fw-bold text-end">The Most Affordable Prices!</h5>
                <p class="card-text text-main pt-2 text-end w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <img class="w-100" src="${sushi_2}" alt="Picture of sushi">
            </div>
          </div>
        </div>
        
        <div class="card mb-3 w-75">
          <div class="row g-0">
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <img class="w-100" src="${sushi_3}" alt="Picture of sushi">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title title-primary fw-bold">Our Locations are always near!</h5>
                <p class="card-text text-main pt-2 w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card mb-3 w-75 align-self-end" style="max-width: 75%">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body d-flex flex-column align-items-end">
                <h5 class="card-title title-primary fw-bold">Delivery! One click away</h5>
                <p class="card-text text-main pt-2 w-75 text-end">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <img class="w-100" src="${sushi_4}" alt="Picture of sushi">
            </div>
          </div>
        </div>
    </main>
`;