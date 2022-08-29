import './assets/css/styles.css'
import Person from './assets/img/imagepic.png'
import Work1  from './assets/img/work1.jpg'
import Work2  from './assets/img/work2.jpg'
import Work3 from './assets/img/work3.jpg'
import Work4  from './assets/img/work4.jpg'
import Work5  from './assets/img/work5.jpg'
import Work6  from './assets/img/work6.jpg'
import Resume from './assets/Anudeep CV_2.0.docx'


function App() {
  return (
    <div className="App">
      <header class="l-header">
        <nav class="nav bd-grid">
          <div>
            <a href="https://anudeeprachapalli.github.io/anudeep" class="nav__logo">Anudeep</a>
          </div>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
              <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
              <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
              <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
              <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
            </ul>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class='bx bx-menu'></i>
          </div>
        </nav>
      </header>
      <main class="l-main">
        <section class="home bd-grid" id="home">
          <div class="home__data">
            <h1 class="home__title">Hi,<br />I'am <span class="home__title-color">Anudeeep</span><br /> Web Designer</h1>

            <a href={Resume} download="AnudeepCV" class="button">My Resume</a>
          </div>

          <div class="home__social">
            <a href="" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
            <a href="" class="home__social-icon"><i class='bx bxl-behance' ></i></a>
            <a href="https://github.com/AnudeepRachapalli" class="home__social-icon"><i class='bx bxl-github' ></i></a>
          </div>

          <div class="home__img">
            <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                <image class="home__blob-img" x="50" y="60" href={Person} />
              </g>
            </svg>
          </div>
        </section>
        <section class="about section " id="about">
          <h2 class="section-title">About</h2>

          <div class="about__container bd-grid">
            <div class="about__img">
              <img src={Person} alt="" />
            </div>

            <div>
              <h2 class="about__subtitle">I'am Anudeep</h2>
              <p class="about__text">Seeking a challenging career with a progressive organization that provides an opportunity to capitalize my technical skills & abilities in the field of information technology (IT).</p>
            </div>
          </div>
        </section>

        <section class="skills section" id="skills">
          <h2 class="section-title">Skills</h2>

          <div class="skills__container bd-grid">
            <div>
              <h2 class="skills__subtitle">Profesional Skills</h2>
              <p class="skills__text">Please find below</p>
              <div class="skills__data">
                <div class="skills__names">
                  <i class='bx bxl-html5 skills__icon'></i>
                  <span class="skills__name">HTML5</span>
                </div>
                <div class="skills__bar skills__html">

                </div>
                <div>
                  <span class="skills__percentage">95%</span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__names">
                  <i class='bx bxl-css3 skills__icon'></i>
                  <span class="skills__name">CSS3</span>
                </div>
                <div class="skills__bar skills__css">

                </div>
                <div>
                  <span class="skills__percentage">85%</span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__names">
                  <i class='bx bxl-javascript skills__icon' ></i>
                  <span class="skills__name">JAVASCRIPT</span>
                </div>
                <div class="skills__bar skills__js">

                </div>
                <div>
                  <span class="skills__percentage">65%</span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__names">
                  <i class='bx bxs-paint skills__icon'></i>
                  <span class="skills__name">UX/UI</span>
                </div>
                <div class="skills__bar skills__ux">

                </div>
                <div>
                  <span class="skills__percentage">85%</span>
                </div>
              </div>
            </div>

            <div>
              <img src={Work3} alt="" class="skills__img" />
            </div>
          </div>
        </section>
        <section class="work section" id="work">
          <h2 class="section-title">Work</h2>

          <div class="work__container bd-grid">
            <a href="" class="work__img">
              <img src={Work1} alt="" />
            </a>
            <a href="" class="work__img">
              <img src={Work2} alt="" />
            </a>
            <a href="" class="work__img">
              <img src={Work3} alt="" />
            </a>
            <a href="" class="work__img">
              <img src={Work4} alt="" />
            </a>
            <a href="" class="work__img">
              <img src={Work5} alt="" />
            </a>
            <a href="" class="work__img">
              <img src={Work6} alt="" />
            </a>
          </div>
        </section>

        <section class="contact section" id="contact">
          <h2 class="section-title">Contact</h2>

          <div class="contact__container bd-grid">
            <div class="contact__info">
              <h3 class="contact__subtitle">EMAIL</h3>
              <span class="contact__text">rachapallianudeep46@gmail.com</span>

              <h3 class="contact__subtitle">PHONE</h3>
              <span class="contact__text">+91 8008201483</span>

              <h3 class="contact__subtitle">ADDRESS</h3>
              <span class="contact__text">India</span>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <p class="footer__title">Anudeep</p>
        <div class="footer__social">
          <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
          <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
          <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
        </div>
        <p class="footer__copy">&#169;Anudeep. All rigths reserved</p>
      </footer>
    </div>
  );
}

export default App;
