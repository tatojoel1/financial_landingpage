
function App() {
  return (
    <div className="App">
      <nav
        id="navbarExample"
        class="navbar navbar-expand-lg fixed-top navbar-light"
        aria-label="Main navigation"
      >
        <div class="container">
          <a class="navbar-brand logo-text" href="#">
            Caroline Sada
          </a>

          <button
            class="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul class="navbar-nav ms-auto navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#header">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Sevicios
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#details">
                  Detalles
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">
                  Caracteristicas
                </a>
              </li>
            </ul>
            <span class="nav-item">
              <a class="btn-solid-sm" href="#contact">
                Get quote
              </a>
            </span>
          </div>
        </div>
      </nav>
      <header id="header" class="header">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xl-5">
              <div class="text-container">
                <h1 class="h1-large">Descubre la manera de invertir</h1>
                <p class="p-large">
                  Solamente dedicando un poco de tu tiempo a la salud
                  financiera.
                </p>
                <a class="btn-solid-lg" href="#services">
                  Nuestros servicios
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-xl-7">
              <div class="image-container">
                <img
                  class="img-fluid"
                  src="assets/images/undraw_Investment_data_re_sh9_hero.png"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="services" class="cards-1 bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Explora Nuestros Servicios</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-icon">
                  <span class="fas fa-headphones-alt"></span>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Analyse your product</h5>
                  <p>
                    Et blandit nisl libero at arcu. Donec ac lectus sed tellus
                    mollis viverra. Nullam pharetra ante at nunc elementum
                  </p>
                  <a class="read-more no-line" href="#">
                    Learn more <span class="fas fa-long-arrow-alt-right"></span>
                  </a>
                </div>
              </div>

              <div class="card">
                <div class="card-icon red">
                  <span class="far fa-clipboard"></span>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Evaluate opportunities</h5>
                  <p>
                    Vulputate nibh feugiat. Morbi pellent diam nec libero
                    lacinia, sed ultrices velit scelerisque. Nunc placerat justo
                    sem
                  </p>
                  <a class="read-more no-line" href="#">
                    Learn more <span class="fas fa-long-arrow-alt-right"></span>
                  </a>
                </div>
              </div>

              <div class="card">
                <div class="card-icon green">
                  <span class="far fa-comments"></span>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Find the influencers</h5>
                  <p>
                    Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec
                    magna tincidunt, nec pala vehicula neque sodales verum
                  </p>
                  <a class="read-more no-line" href="#">
                    Learn more <span class="fas fa-long-arrow-alt-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="details" class="basic-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xl-7">
              <div class="image-container">
                <img
                  class="img-fluid img-rounded"
                  src="assets/images/undraw_Collaborators_re_hont_details.png"
                  alt="alternative"
                />
              </div>
            </div>
            <div class="col-lg-6 col-xl-5">
              <div class="text-container">
                <div class="section-title">¿Qué hacemos nosotros?</div>
                <h2>Te ayudamos a tomar la mejor decisión</h2>
                <p>
                  Etiam tempus condimentum congue. In sit amet nisi eget massa
                  condimentum lobortis eget ac eros. In hac habitasse platea
                  dictumst. Aenean molestie mauris eget sapien sagittis, a
                  bibendum magna tincidunt
                </p>
                <a class="btn-solid-reg" href="#contact">
                  Get quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="basic-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xl-5">
              <div class="text-container">
                <div class="section-title">SOBRE NOSOTROS</div>
                <h2>Tenemos el mejor análisis financiero</h2>
                <p>
                  Etiam tempus condimentum congue. In sit amet nisi eget massa
                  condimentum lobortis eget ac eros. In hac habitasse platea
                  dictumst. Aenean molestie mauris eget sapien sagittis, a
                  bibendum magna tincidunt
                </p>
                <a class="btn-outline-reg" href="#">
                  Más detalles
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-xl-7">
              <div class="image-container">
                <img
                  className="img-fluid img-rounded"
                  src="assets/images/undraw_Predictive_analytics_re_wxt8_aboutus.png"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="features" class="accordion-1">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <h2 class="h2-heading">
                Cáracteristicas de nuestra asesoria en línea
              </h2>
              <p class="p-heading">
                Suspendisse vitae enim arcu. Aliquam convallis risus a felis
                blandit, at mollis nisi bibendum. Aliquam nec purus at ex
                blandit posuere nec a odio. Proin lacinia dolor justo
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-5">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <div class="accordion-icon">
                    <span class="fas fa-tv"></span>
                  </div>
                  <div class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Analizamos tu idea y tu plan
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Mauris ornare libero et pharetra hendrerit. Cura elementum
                      lectus quis tellus pretium, vitae lobortis dui sagittis
                      aliquam et enim vel semon anticus
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-icon blue">
                    <span class="fas fa-chart-line"></span>
                  </div>
                  <div class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Encontramos oportunidades de crecimiento
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Mauris ornare libero et pharetra hendrerit. Cura elementum
                      lectus quis tellus pretium, vitae lobortis dui sagittis
                      aliquam et enim vel semon anticus
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-icon purple">
                    <span class="fas fa-lightbulb"></span>
                  </div>
                  <div class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Te ayudamos en tu idea
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Mauris ornare libero et pharetra hendrerit. Cura elementum
                      lectus quis tellus pretium, vitae lobortis dui sagittis
                      aliquam et enim vel semon anticus
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-icon orange">
                    <span class="fas fa-tools"></span>
                  </div>
                  <div class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Evaluamos tus áreas de oportunidad
                    </button>
                  </div>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Mauris ornare libero et pharetra hendrerit. Cura elementum
                      lectus quis tellus pretium, vitae lobortis dui sagittis
                      aliquam et enim vel semon anticus
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-7">
              <div class="image-container">
                <img
                  className="img-fluid img-rounded"
                  src="assets/images/undraw_Detailed_information_re_qmuc_help.png"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cards-2 bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="h2-heading">Testimonios de a quienes hemos ayudado</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <img
                  class="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div class="testimonial-author">Roe Smith</div>
                  <div class="occupation">General Manager, Presentop</div>
                </div>
                {/*<div class="gradient-floor red-to-blue"></div>*/}
              </div>

              <div class="card">
                <img
                  class="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div class="testimonial-author">Sam Bloom</div>
                  <div class="occupation">General Manager, Presentop</div>
                </div>
              </div>

              <div class="card">
                <img
                  class="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div class="testimonial-author">Bill McKenzie</div>
                  <div class="occupation">General Manager, Presentop</div>
                </div>
              </div>

              <div class="card">
                <img
                  class="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div class="testimonial-author">Vanya Dropper</div>
                  <div class="occupation">General Manager, Presentop</div>
                </div>
              </div>

              <div class="card">
                <img
                  class="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div class="testimonial-author">Lefty Brown</div>
                  <div class="occupation">General Manager, Presentop</div>
                </div>
              </div>

              <div class="card">
                <img
                  class="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div class="testimonial-author">Susane Blake</div>
                  <div class="occupation">General Manager, Presentop</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div class="slider-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h4>
                Trusted by over <span class="green">5000</span> customers
                worldwide
              </h4>
              <hr class="section-divider" />

              <div class="slider-container">
                <div class="swiper-container image-slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img
                        class="img-fluid"
                        src="assets/images/customer-logo-1.png"
                        alt="alternative"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        class="img-fluid"
                        src="assets/images/customer-logo-2.png"
                        alt="alternative"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        class="img-fluid"
                        src="assets/images/customer-logo-3.png"
                        alt="alternative"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        class="img-fluid"
                        src="assets/images/customer-logo-4.png"
                        alt="alternative"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        class="img-fluid"
                        src="assets/images/customer-logo-5.png"
                        alt="alternative"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        class="img-fluid"
                        src="assets/images/customer-logo-6.png"
                        alt="alternative"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     */}
      <div id="contact" class="form-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="text-container">
                <div class="section-title">CONTACTANOS</div>
                <h2>Llena el siguiente formulario</h2>
                <p>
                  Si tienes más dudas con respecto a nuestra ayuda, o necesitas
                  ayuda más personalizadas, contactanos y en la primera
                  oportunidad que tengamos, unos de nuestros colaboladores te
                  contactará.
                </p>
                <ul class="list-unstyled li-space-lg">
                  <li class="d-flex">
                    <i class="fas fa-square"></i>
                    <div class="flex-grow-1">
                      Vel maximus nunc aliquam ut. Donec semper, magna a
                      pulvinar
                    </div>
                  </li>
                  <li class="d-flex">
                    <i class="fas fa-square"></i>
                    <div class="flex-grow-1">
                      Suscipit sit amet quis lorem. Sed risus ipsum, egestas
                      mare
                    </div>
                  </li>
                  <li class="d-flex">
                    <i class="fas fa-square"></i>
                    <div class="flex-grow-1">
                      Sem pulvinar suscipit sit amet quis lorem. Sed risus
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control-input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    type="text"
                    class="form-control-input"
                    placeholder="Message"
                  />
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control-submit-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="footer bg-gray">
        <img
          class="decoration-circles"
          src="assets/images/decoration-circles.png"
          alt="alternative"
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h4>
                Mira nuestro contenido ¡Siguenos en nuestras redes sociales!
              </h4>
              <div class="social-container">
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-tiktok fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-instagram fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-youtube fa-stack-1x"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <ul class="list-unstyled li-space-lg p-small">
                <li>
                  <a href="#">Detalles</a>
                </li>
                <li>
                  <a href="#">Terminos & Condiciones</a>
                </li>
                <li>
                  <a href="#">Politica de privacidad</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12">
              <p class="p-small statement">
                Copyright © <a href="#">Caroline Sada</a>
              </p>
            </div>

            <div class="col-lg-3 col-md-12 col-sm-12">
              <p class="p-small statement">
                Distributed by{" "}
                <a href="https://therichpost.com/" target="_blank">
                  Caroline Sada
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button id="myBtn">
        <img src="assets/images/up-arrow.png" alt="alternative" />
      </button>
    </div>
  );
}

export default App;
