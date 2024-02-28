import React, { useState } from "react";
import '../app.scss';

export default function TeamCompetitorRow({ name, surname, age, invasionTechnique, breakoutTechnique, flightTechnique }) {
    const [switchTeam, setSwitchTeam] = useState(false);

    function handleSwitch() {
        setSwitchTeam(prevSwitch => !prevSwitch);
    }

    return (
        <tr className="team_page--content--team--competitor_row" onClick={handleSwitch}>
            <td> {name} </td>
            <td> {surname} </td>
            {!switchTeam && (
                <React.Fragment>
                    <td> {age} </td>
                    <td> {invasionTechnique} </td>
                    <td> {breakoutTechnique} </td>
                    <td> {flightTechnique} </td>
                </React.Fragment>
            )}
            { switchTeam && (
                <React.Fragment>
                    <td> <button> Przesuń do kadry A</button> </td>
                    <td> <button> Przesuń do kadry B</button> </td>
                    <td> <button> Przesuń do kadry C</button> </td>
                    <td> <button> Odsuń z zespołu </button> </td>
                </React.Fragment>
            )}
        </tr>
    )
}