import React from "react";
import '../app.scss';
import HomePageTeamCard from "./HomePageTeamCard";
import HomePageRanking from "./HomePageRanking";

export default function HomePageDashboard() {
    return (
        <main className="home_page--dashboard">
            <div className="home_page--card_wrapper">
                <HomePageTeamCard team = {'A'}/>
                <HomePageTeamCard team = {'B'}/>
                <HomePageTeamCard />
                <HomePageTeamCard />
            </div>
            <HomePageRanking />
        </main>
    )
}