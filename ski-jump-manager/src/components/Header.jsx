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
import { goToNextDay } from "../assets/utilities/goToNextDay";
import findNextCompetitions from "../assets/utilities/findNextCompetitons";
const { ipcRenderer } = window.require('electron');

const flags = [austriaFlag, germanyFlag, sloveniaFlag, norwayFlag, japanFlag, polandFlag, swissFlag, finlandFlag, italyFlag, usaFlag, estoniaFlag, czechiaFlag];

export default function Header() {
    const countryData = useContext(CountryDataContext); 
    const [currentDate, setCurrentDate] = useState(undefined); 
    const [nextCompetitions, setNextCompetitions] = useState(undefined);
    const [renderHeaderKey, setRenderHeaderKey] = useState(1);
    const [timeToNextCompetition, setTimeToNextCompetition] = useState(undefined);

    useEffect(() => {
        ipcRenderer.send('getDate');
        ipcRenderer.send('loadSave');

        const nextCompetitions = findNextCompetitions();
        setNextCompetitions(nextCompetitions);
    }, [renderHeaderKey])

    ipcRenderer.on('dateResponse', (err, date) => {
        setCurrentDate(date[0]);
    })

    ipcRenderer.on('saveGameDataResponse', (event, data) => {
        console.log(data);
        setTimeToNextCompetition(data.diff);
    })

    function handleNewDay() {
        goToNextDay(currentDate, nextCompetitions);
        setRenderHeaderKey(prevKey => prevKey + prevKey);
    }

    return (
        <header className="header" key={renderHeaderKey}>
            {countryData && currentDate && (
                <>
                    <img src={flags[countryData.id]} />
                    <section className="header--section">
                        <div className="header_section--next_competiton">
                            <h1> Dom </h1>
                            <h3> Następne zawody za {timeToNextCompetition} dni </h3>
                        </div>
                        <div className="header_section--date">
                            <h3> Poniedziałek </h3>
                            <h3> {currentDate.day}.0{currentDate.month+1}.{currentDate.year} </h3>
                        </div>
                    </section>
                    <button className="header--continue_button" onClick={handleNewDay}> Kontynnuuj </button>
                </>

            )}
        </header>
    )
}
