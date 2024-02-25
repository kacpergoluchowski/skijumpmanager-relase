import React from "react";
import '../app.scss';
const { ipcRenderer } = window.require('electron');
import { useNavigate } from "react-router-dom";

export default function ChooseCountryConfirm( {hideBox, selectedCountry} ) {
    const navigator = useNavigate();

    function createNewGame() {
        const countryData = {
            id: selectedCountry[0],
            name: selectedCountry[1]
        }

        ipcRenderer.send('createNewGame', countryData);
    
        navigator('/home');
    }

    return (
        <div className="choose_country--confirm">
            <h1> Czy jesteś pewny wyboru? </h1>
            <div>
                <button className="accept" onClick={createNewGame}> Tak </button>
                <button className="reject" onClick={hideBox}> Nie </button>
            </div>
        </div>
    )
}