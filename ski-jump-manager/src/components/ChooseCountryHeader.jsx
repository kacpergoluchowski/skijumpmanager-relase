import React from "react";
import { Link } from "react-router-dom";

export default function ChooseCountryHeader( {selectedCountry, setConfirmVisible} ) {
    return (
        <header>
            <h1> Wybierz drużynę </h1>
            <section className="button-section">
                { !selectedCountry && <Link to = '/'> <button className="reject-button"> Powrót </button> </Link> }
                { selectedCountry && <button className="accept-button" onClick={setConfirmVisible}> Kontynuuj </button> }
            </section>
        </header>
    )
}