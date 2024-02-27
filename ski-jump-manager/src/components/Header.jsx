import React, { useContext, useEffect, useState } from "react";
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
import CountryDataContext from "../context/CountryDataContext";

export default function Header() {
    const countryData = useContext(CountryDataContext);
    
    const flags = [austriaFlag, germanyFlag, sloveniaFlag, norwayFlag, japanFlag, polandFlag, swissFlag, finlandFlag, italyFlag, usaFlag, estoniaFlag, czechiaFlag];

    return (
        <header className="header">
        { countryData && (
            <>
                <img src = {flags[countryData.id]} />   
                <section className="header--section">
                    <div className="header_section--next_competiton">
                        <h1> Dom </h1>
                        <h3> Następne zawody za 65 dni </h3>
                    </div>
                    <div className="header_section--date">
                        <h3> Poniedziałek </h3>
                        <h3> 10 cze 2024 </h3>
                    </div>
                </section>
                <button className="header--continue_button"> Kontynnuuj </button>
            </>
        )}
        </header>
    )
}