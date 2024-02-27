import React from "react";
import '../app.scss';

export default function TeamCompetitorRow( {name, surname, age, invasionTechnique, breakoutTechnique, flightTechnique}) {
    return (
        <tr className="team_page--content--team--competitor_row">
            <td> {name} </td>
            <td> {surname} </td>
            <td> {age} </td>
            <td> {invasionTechnique} </td>
            <td> {breakoutTechnique} </td>
            <td> {flightTechnique} </td>
        </tr>
    )
}