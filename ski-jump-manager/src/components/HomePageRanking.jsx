import React, { useEffect, useState } from "react";
import '../app.scss';
import competitors from '../assets/data/competitors.json';
import CompetitorRow from "./HomePageCardCompetitorRow";

export default function HomePageRanking() {
    const [wcRanking, setWcRanking] = useState(undefined);

    useEffect(() => {
        const temporaryWcRankingBox = competitors;
        temporaryWcRankingBox.sort((competitorA, competitorB) => competitorA.wcPoints - competitorB.wcPoints);
        setWcRanking(temporaryWcRankingBox);
    }, []);

    return (
        <div className="home_page--ranking">
            <h1> Ranking </h1>
            <table>
                {wcRanking && wcRanking.map(competitor => {
                    return <CompetitorRow countryId={competitor.countryId+1} name={competitor.name} surname={competitor.surname} wcPoints={competitor.wcPoints} />
                })}
            </table>
        </div>
    )
}