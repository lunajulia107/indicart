import React from "react"; 
  
const Icon = ({ svg }) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

const ExploreExperience = ({ experiences }) => {
  return (
    <> 
      <ul className="gap-5">
        {experiences.map((experience, index) => (
          <li
            key={index}
            className="gap-3 animate__animated animate__fadeInUp hover-scale"
            style={{ animationDelay: `${index * 0.2}s` }} // Atraso baseado no índice
          >
            <div className="icon floating-icon animate__animated animate__fadeInLeft animate__delay-1s">
              {/* Usando o componente Icon para renderizar o SVG */}
              <Icon svg={experience.icon} />
            </div>
            <div className="gap-2 text animate__animated animate__fadeInRight animate__delay-2s">
              <div>{experience.title}</div>
              <p className="fw-light text-darker-gray75">{experience.paragraph}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExploreExperience;