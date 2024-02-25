import React from "react";
import '../app.scss';
import ChooseCountryCountries from "./ChooseCountryCountries";
import ChooseCountryInfo from "./ChooseCountryInfo";

export default function ChooseCountryContent( {setSelectedCountry, selectedCountry} ) {
    return (
        <main className="choose_country_content">
            <ChooseCountryCountries setSelectedCountry={setSelectedCountry}/>
            <ChooseCountryInfo countryInfo={selectedCountry}/>
        </main>
    )
}