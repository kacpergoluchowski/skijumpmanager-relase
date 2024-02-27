import React from "react";
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

export default function CompetitorRow( {countryId, name, surname, age, wcPoints} ) {
    const flags = [undefined, austriaFlag, germanyFlag, sloveniaFlag, norwayFlag, japanFlag, polandFlag, swissFlag, finlandFlag, italyFlag, usaFlag, estoniaFlag, czechiaFlag];

    return (
        <tr className="home_page--card--competitor_row">
            {countryId && <img src = {flags[countryId]} />}
            {name && surname && <td> {name} {surname} </td>}
            {age && <td> {age} </td>}
            {wcPoints && <td> {wcPoints} </td>}
        </tr>
    )
}