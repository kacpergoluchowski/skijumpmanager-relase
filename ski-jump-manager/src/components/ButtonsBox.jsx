import React from "react";
import '../app.scss';
import playGamePic from '../assets/images/playGamePic.png';
import tutorialPic from '../assets/images/tutorialPic.png';
import leavePic from '../assets/images/leavePic.png';
import { Link } from "react-router-dom";
const { ipcRenderer } = window.require('electron')

export default function ButtonsBox() {
    function closeApp() {
        ipcRenderer.send('closeApp');
    }

    return (
        <div className="buttons-box">
            <Link to = '/chooseCountry'> <button> <img src = {playGamePic} /> Rozpocznij grę </button> </Link>
            <button> <img src = {tutorialPic} /> Samouczek </button>
            <button onClick={closeApp}> <img src = {leavePic} /> Zamknij grę </button>
        </div>
    )
}