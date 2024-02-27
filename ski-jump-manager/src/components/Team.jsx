import React, { useContext, useEffect, useState } from "react";
import '../app.scss';
import competitors from '../assets/data/competitors.json';
import TeamCompetitorRow from "./TeamCompetitorRow";
import CountryDataContext from "../context/CountryDataContext";

export default function Team({ team }) {
    const [teamCompetitors, setTeamCompetitors] = useState(undefined);
    const saveGameData = useContext(CountryDataContext);

    useEffect(() => {
        const temporaryCompetitorsBox = new Array();

        if (competitors && saveGameData)
            competitors.forEach(competitor => {
                if (competitor.teamA && team == 'A' && saveGameData.id == competitor.countryId)
                    temporaryCompetitorsBox.push(competitor)
                else if (competitor.teamB && team == 'B' && saveGameData.id == competitor.countryId)
                    temporaryCompetitorsBox.push(competitor);
                else if (competitor.teamC && team == 'C' && saveGameData.id == competitor.countryId)
                    temporaryCompetitorsBox.push(competitor);
            });
        setTeamCompetitors(temporaryCompetitorsBox);
    }, [saveGameData])

    return (
        <div className="team_page--content--team">
            <table>
                <tr className="team_page--content--team--headlines">
                    <td> Imię </td>
                    <td> Nazwisko </td>
                    <td> Wiek </td>
                    <td> Najazd </td>
                    <td> Wybicie </td>
                    <td> Lot </td>
                </tr>
                {teamCompetitors && teamCompetitors.map(competitor => {
                    return <TeamCompetitorRow 
                                name = {competitor.name} 
                                surname={competitor.surname} 
                                age={competitor.age} 
                                invasionTechnique={competitor.invasionTechnique} 
                                breakoutTechnique={competitor.breakoutTechnique} 
                                flightTechnique={competitor.flightTechnique}/>
                })}
            </table>

        </div>
    )
}