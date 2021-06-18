import React from 'react';
import './PartnersMain.scss';
import SliderShowContainer from "../../../Containers/SliderShowContainer";
import Headings from "../../../Components/Headings/Body/Headings";

const PartnersMain = (props) => {

    return (
        <section className="partners_main">
            <div className="container">
             <Headings heading={props.heading}/>
            </div>
            <div>

            </div>
            <section className="bg_partners">
                <SliderShowContainer/>
            </section>
        </section>

    )
}

export default PartnersMain;