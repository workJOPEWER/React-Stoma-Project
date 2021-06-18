import React from "react";
import "./SliderShow.scss";
import PropTypes from "prop-types";

const Card = ({ property }) => {
  const { index, picture, about, details } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt={about}/>
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="about">
          {about}<br/>
        </p>
        <p className="details">
          {details}<br/>
        </p>
      </div>
    </div>
  );

};
Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;