import React, { useEffect } from "react";
import '../app.scss';
import austriaFlag from '../assets/images/austriaFlag.png';
import germanyFlag from '../assets/images/germanyFlag.png';
import sloveniaFlag from '../assets/images/sloveniaFlag.png';
import norwayFlag from '../assets/images/norwayFlag.png';
import japanFlag from '../assets/images/japanFlag.png';
import polandFlag from '../assets/images/polandFlag.png';
import swissFlag from '../assets/images/swissFlag.png';
import finlandFlag from '../assets/images/finlandFlag.png';
import italyFlag from '../assets/images/italyFlag.png';
import usaFlag from '../assets/images/usaFlag.png';
import estoniaFlag from '../assets/images/estoniaFlag.png';
import czechiaFlag from '../assets/images/czechiaFlag.png';
 
export default function ChooseCountryInfo( { countryInfo }) {
    const flags = [austriaFlag, germanyFlag, sloveniaFlag, norwayFlag, japanFlag, polandFlag, swissFlag, finlandFlag, italyFlag, usaFlag, estoniaFlag, czechiaFlag];

    return (
        <div className="choose_country_content--country_info">
            { countryInfo && <img src = {flags[countryInfo[0]]}/> }
            { countryInfo && <h1> {countryInfo[1]} </h1>}
        </div>
    )
}