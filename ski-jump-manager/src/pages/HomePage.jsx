import React, { useEffect, useState } from "react";
import '../app.scss';
import Navbar from "../components/Navbar";
import HomePageContent from "../components/HomePageContent";
import CountryDataContext from "../context/CountryDataContext";
const { ipcRenderer } = window.require('electron');

export default function HomePage() {
    const [countryData, setCountryData] = useState(undefined);

    useEffect(() => {
        ipcRenderer.send('loadSave');
    }, [])

    ipcRenderer.on('saveGameDataResponse', (event, data) => {
        setCountryData(data);
    })

    return (
        <div className="home-page">
            <CountryDataContext.Provider value={countryData} >
                <Navbar />
                <HomePageContent />
            </CountryDataContext.Provider>
        </div>
    )
}