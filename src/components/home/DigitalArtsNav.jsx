import React from "react";
import PropTypes from "prop-types"; 

const DigitalArtsNav = ({ navDigitalArts }) => {
  return (
    <ul className="gap-3">
      {navDigitalArts.map((item) => {
        const buttonClass = `border-0 btn-format-one ${item.id === 0 ? "btn-iris-purple text-white" : ""
          } animate__animated animate__fadeInUp animate__delay-1s`;  

        return (
          <li key={item.id}>
            <button
              className={buttonClass}
              style={{ width: "max-content" }}
              disabled={item.id !== 0}
            >
              {item.description}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

DigitalArtsNav.propTypes = {
  navDigitalArts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DigitalArtsNav;