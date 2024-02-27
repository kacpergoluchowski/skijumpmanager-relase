import React, { useContext, useEffect, useState } from "react";
import '../app.scss';
import competitors from '../assets/data/competitors.json';
import CountryDataContext from "../context/CountryDataContext";
import CompetitorRow from "./HomePageCardCompetitorRow";


export default function HomePageTeamCard({ team }) {
    const saveGameData = useContext(CountryDataContext);
    const [teamACompetitors, setTeamACompetitors] = useState(undefined);

    useEffect(() => {
        if (saveGameData) {
            const temporaryCompetitorsBox = new Array();
            competitors.forEach(competitor => {
                if (competitor.countryId == saveGameData.id)
                    temporaryCompetitorsBox.push(competitor);
            });
            setTeamACompetitors(temporaryCompetitorsBox);
        }
    }, [saveGameData])

    return (
        <div className="home_page--team-card">
            <h1 className="home_page--card--headline"> Kadra {team} </h1>
            <table>
                {teamACompetitors && teamACompetitors.map(competitor => {
                    if (team == "A" && competitor.teamA)
                        return <CompetitorRow name={competitor.name} surname={competitor.surname} age={competitor.age} tiredness={competitor.tiredness} />
                    else if (team == "B" && competitor.teamB)
                        return <CompetitorRow name={competitor.name} surname={competitor.surname} age={competitor.age} tiredness={competitor.tiredness} />

                })}
            </table>
        </div>
    )
}