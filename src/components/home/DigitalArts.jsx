import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

const DigitalArts = ({ digitalArts }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3500,    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="arts-projects">
      <Slider {...sliderSettings}>
        {digitalArts.map((digitalArt, index) => (
          <div key={digitalArt.id} className="d-flex justify-content-center justify-content-lg-start">
            <div className="art-project bg-white border border-darker-gray10 gap-3 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              {/* Imagem principal da arte com animação */}
              <div className="art bg-lilac">
                <div className="box-images animate__animated animate__fadeInLeft animate__delay-2s">
                  <div className="image">
                    <img src={digitalArt.artImg} alt={digitalArt.description} />
                  </div>
                </div>

                {/* Imagens dos autores/atores com animação */}
                <div className="actors d-flex animate__animated animate__fadeInRight animate__delay-3s">
                  {digitalArt.artImgActors.map((actorImg, index) => (
                    <div
                      className="actor-photo bg-lilac border-white"
                      key={index}
                      style={index === 1 ? { marginLeft: "-8px" } : {}}
                    >
                      <img src={actorImg} alt={`Autor da arte: ${digitalArt.description}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Descrição e detalhes da arte com animação */}
              <div className="d-flex flex-column gap-3 p-3 w-100 animate__animated animate__fadeInUp animate__delay-4s">
                <div className="ff-outfit description">
                  <div>
                    <p className="description-title">{digitalArt.description}</p>
                    <div className="align-items-center avaliation d-flex gap-1 justify-content-start">
                      <i className="bi bi-star-fill text-yellow"></i>
                      <span className="fs-15 text-yellow">
                        {digitalArt.avaliationNumber}
                      </span>
                    </div>
                  </div>

                  <span className="pages-numbers text-darker-gray50">
                    {digitalArt.pagesNumbers}
                  </span>
                </div>

                <hr className="border-darker-gray10" />

                <div className="d-flex justify-content-between w-100">
                  <button className="btn-lighter-gray text-iris-purple animate__animated animate__pulse animate__delay-5s" type="button">
                    Mais
                  </button>

                  <p className="location text-darker-gray75">
                    {digitalArt.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

DigitalArts.propTypes = {
  digitalArts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      artImg: PropTypes.string.isRequired,
      artImgActors: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      avaliationNumber: PropTypes.string.isRequired,
      pagesNumbers: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DigitalArts;