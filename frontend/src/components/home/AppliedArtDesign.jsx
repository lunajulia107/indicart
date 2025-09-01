import React from 'react';
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

const AppliedArtDesign = ({ appliedArtsDesign }) => {
  const sliderSettings = { 
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,  
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="art-design-box gap-5">
      <Slider {...sliderSettings}>
        {appliedArtsDesign.map((appliedArtDesign, index) => (
          <div key={appliedArtDesign.id} className="d-flex justify-content-center justify-content-lg-start">
            <div className="art-design gap-4 mb-5" key={appliedArtDesign.id}>
              {/* Box de imagens com animação */}
              <div className="box-images gap-4">
                <div className="bg-light-purple box-images-one animate__animated animate__fadeInLeft animate__delay-1s">
                  <img src={appliedArtDesign.artOne} alt={`Arte ${appliedArtDesign.artName}`} />
                </div>

                <div className="box-images-two">
                  <div className="bg-light-purple animate__animated animate__fadeInUp animate__delay-2s">
                    <img src={appliedArtDesign.artTwo} alt={`Arte ${appliedArtDesign.artName}`} />
                  </div>
                  <div className="bg-light-purple animate__animated animate__fadeInUp animate__delay-3s">
                    <img src={appliedArtDesign.artThree} alt={`Arte ${appliedArtDesign.artName}`} />
                  </div>
                </div>
              </div>

              {/* Detalhes da arte com animação */}
              <div className="about-art gap-3 animate__animated animate__fadeInRight animate__delay-2s">
                <div className="about-art-title gap-1">
                  <div className="art-name">{appliedArtDesign.artName}</div>
                  <div className="art-type">{appliedArtDesign.artType}</div>
                </div>

                {/* Informações do autor com animação */}
                <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between">
                  <div className="box-actor gap-2 animate__animated animate__fadeInLeft animate__delay-3s">
                    <div className="box-actor-photo">
                      <img src={appliedArtDesign.artActorPhoto} alt={`Autor: ${appliedArtDesign.artActorName}`} />
                    </div>
                    <span className="box-actor-name">
                      {appliedArtDesign.artActorName}
                    </span>
                  </div>

                  <button className="btn-border-primary btn-secondary-format animate__animated animate__pulse animate__delay-4s" type="button">
                    Conferir
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

AppliedArtDesign.propTypes = {
  appliedArtsDesign: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      artOne: PropTypes.string.isRequired,
      artTwo: PropTypes.string.isRequired,
      artThree: PropTypes.string.isRequired,
      artName: PropTypes.string.isRequired,
      artType: PropTypes.string.isRequired,
      artActorPhoto: PropTypes.string.isRequired,
      artActorName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AppliedArtDesign;