import React from "react";
import '../app.scss';
import playGamePic from '../assets/images/playGamePic.png';
import tutorialPic from '../assets/images/tutorialPic.png';
import leavePic from '../assets/images/leavePic.png';
const { ipcRenderer } = window.require('electron')

export default function ButtonsBox() {
    function closeApp() {
        ipcRenderer.send('closeApp');
    }

    return (
        <div className="buttons-box">
            <button> <img src = {playGamePic} /> Rozpocznij grę </button>
            <button> <img src = {tutorialPic} /> Samouczek </button>
            <button onClick={closeApp}> <img src = {leavePic} /> Zamknij grę </button>
        </div>
    )
}