import React from "react";
import '../app.scss';
import ButtonsBox from "../components/ButtonsBox";

export default function StartPage() {
    return (
        <div className="start-page">
            <h1 className="title"> Trener skoków narciarskich </h1>
            <ButtonsBox />
        </div>
    )
}