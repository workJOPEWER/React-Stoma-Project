import React, { Component } from "react";
import "./SliderShow.scss";
import Card from "./Card.jsx";


class SliderShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: props.partners.properties,
      property: props.partners.properties[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: this.props.partners.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: this.props.partners.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div className="slider_container">
        <button className="prev_button"
                onClick={() => this.prevProperty()}
                disabled={property.index === 0}>
          <div className="triangle-left"></div>
        </button>

        <button className="next_button"
                onClick={() => this.nextProperty()}
                disabled={property.index === this.state.properties.length - 1}>
          <div className="triangle-right"></div>
        </button>

        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div className="cards-slider-wrapper" style={{
                "transform": `translateX(-${property.index * (100 / properties.length)}%)`
              }}>
                {
                  properties.map(property => <Card key={property._id} property={property}/>)
                }
              </div>
            </div>
          </div>

        </div>


      </div>
    );
  }


}

export default SliderShow;
