import React, { useEffect, useState } from "react";
import '../app.scss';
import Navbar from "../components/Navbar";
import TeamContent from "../components/TeamContent";
import CountryDataContext from "../context/CountryDataContext";
const { ipcRenderer } = window.require('electron')

export default function TeamPage() {
    const [countryData, setCountryData] = useState(undefined);

    useEffect(() => {
        ipcRenderer.send('loadSave');
    })

    ipcRenderer.on('saveGameDataResponse', (event, data) => {
        setCountryData(data);
    })

    return (
        <div className="team_page">
            <CountryDataContext.Provider value={countryData} >
                <Navbar />
                <TeamContent />
            </CountryDataContext.Provider>
        </div>
    )
}