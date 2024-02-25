import React from "react";
import '../app.scss';

export default function ChooseCountryCard( {id, name, flag, setSelectedCountry} ) {
    function checkCountry() {
        const checkedCountryInfo = [id, name];
        setSelectedCountry(checkedCountryInfo);
    }

    return (
        <div className="choose_country_content--card" onClick={checkCountry}>
            <img src={flag} alt={`Flaga ${name}`} />
            <h1> {name} </h1>
        </div>
    )
}