import React from 'react'; 
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer"; 

import ExploreExperience from "./components/home/ExploreExperience";
import DigitalArtsNav from "./components/home/DigitalArtsNav";
import DigitalArts from "./components/home/DigitalArts";
import AppliedArtDesign from "./components/home/AppliedArtDesign";

import experiencesJson from "./json/experiences";
import navDigitalArtsJson from "./json/navDigitalArts";
import digitalArtsJson from "./json/digitalArts";
import appliedArtsDesignJson from "./json/appliedArtsDesign";

function App() {
  return (
    <> 
      <Header /> 

      <main className="pt-5">
        <section className="section-call-to-action">
          <div className="arts-images gap-4">
            <figure className="arts-images-box1">
              <img className="animate__animated animate__fadeInLeft animate__delay-1s" src="./images/home/art6.png" alt="Arte 6" />
              <img className="animate__animated animate__fadeInLeft animate__delay-2s" src="./images/home/art5.png" alt="Arte 5" />
            </figure>
            <figure className="arts-images-box2">
              <img className="animate__animated animate__fadeInUp animate__delay-1s" src="./images/home/art1.png" alt="Arte 1" />
              <img className="animate__animated animate__fadeInUp animate__delay-2s" src="./images/home/art2.png" alt="Arte 2" />
              <img className="animate__animated animate__fadeInUp animate__delay-3s" src="./images/home/art3.png" alt="Arte 3" />
              <img className="animate__animated animate__fadeInUp animate__delay-4s" src="./images/home/art4.png" alt="Arte 4" />
            </figure>
          </div>
          <div className="title gap-5">
            <h2 className="animate__animated animate__fadeInLeft animate__delay-1s align-items-center d-flex ff-roundend flex-column">
              Para artistas e <span className="animate__animated animate__fadeInRight animate__delay-2s ff-integral-cf fs-1 fw-bold">Amantes de arte</span>
            </h2>
            <button className="animate__animated animate__fadeInUp animate__delay-3s border-0 btn-explore btn-gradient text-white" type="button">
              Explore a Arte Digital
            </button>
          </div>
        </section> 

        <article className="animate__animated animate__fadeInUp animate__delay-2s align-items-center article-explore-experience bg-light-gray d-flex justify-content-center">
          <div className="align-items-center container d-flex gap-5 flex-column flex-lg-row justify-content-center">
            <div className="box-title gap-2">
              <h6 className="ff-roundend">Indicart</h6>
              <h3 className="ff-integral-cf">Explore a experiência</h3>
            </div>
            <ExploreExperience experiences={experiencesJson.experiences} />
          </div>
        </article>

        <section className="animate__animated animate__fadeInLeft animate__delay-2s container gap-6 section-who-we-are">
          <figure className="section-who-we-are-image justify-content-center">
            <img src="./images/home/Three-arts.png" alt="Artes" />
          </figure>
          <div className="section-who-we-are-text">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-2">
                <h4 className="ff-roundend">Sua plataforma digital</h4>
                <h2 className="fw-bolder">Indicart</h2>
              </div>
              <p className="fw-light text-darker-gray75">
                Na Indicart, você pode explorar ou até mesmo vender seu talento
                aplicado em suas criações e adquirir obras de arte digital de
                alta qualidade. Junte-se à nossa comunidade de entusiastas de
                arte!
              </p>
            </div>
            <button className="animate__animated animate__pulse animate__delay-3s border-0 btn-format-one btn-gradient text-white" type="button">
              Junte-se a nós
            </button>
          </div>
        </section>

        <section className="animate__animated animate__fadeInUp animate__delay-2s container section-digital-arts">
          <div className="d-flex flex-column gap-5">
            <header className="text-center text-lg-start">
              <h4 className="ff-roundend">Projetos aplicados</h4>
              <h2 className="ff-integral-cf">Cheio de artes digitais</h2>
            </header>

            <nav>
              <DigitalArtsNav navDigitalArts={navDigitalArtsJson.navDigitalArts} />
            </nav>

            <DigitalArts digitalArts={digitalArtsJson.digitalArts} />
          </div>
        </section>

        <section className="animate__animated animate__fadeInLeft animate__delay-2s bg-light-gray section-help-me">
          <div className="align-items-center container d-flex flex-column gap-5">
            <div className="align-items-center d-grid gap-3">
              <div className="d-flex flex-column gap-2">
                <h2 className="text-center">Encontre Respostas e Suporte </h2>
                <h4 className="ff-roundend text-center">
                  Dúvidas sobre anúncios ou compras de artes digitais?
                </h4>
              </div>

              <p className="fw-light text-darker-gray75 text-center">
                Visite nosso blog para descobrir dicas e respostas sobre como
                impulsionar ou comprar obras de arte digitais em nossa
                plataforma. Se tiver alguma dúvida, nosso Chatbot está à
                disposição, e você também pode nos encontrar nas redes sociais.
                Estamos aqui para ajudar!
              </p>
            </div>

            <button
              className="border-0 btn-format-one btn-delicate-orchid text-white pe-5 ps-5"
              type="button"
              style={{ width: "initial" }}
            >
              Quero ajuda
            </button>
          </div>
        </section>

        <section className="animate__animated animate__fadeInUp animate__delay-2s align-items-center align-items-lg-start section-applied-art-design container gap-5">
          <div className="art-design-header d-flex flex-column gap-2">
            <h4 className="ff-roundend">Ainda mais artes</h4>
            <h2 className="mb-5">Para encantar</h2>
          </div>

          <AppliedArtDesign appliedArtsDesign={appliedArtsDesignJson.appliedArtsDesign} />
        </section>
      </main> 
      
      <Footer /> 
    </>
  );
}

export default App;