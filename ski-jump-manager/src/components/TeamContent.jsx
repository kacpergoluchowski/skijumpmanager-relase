import React, { useState } from "react";
import '../app.scss';
import Header from "./Header";
import TeamMenu from "./TeamMenu";
import Team from "./Team";

export default function TeamContent() {
    const [teamAVisible, setTeamAVisible] = useState(true);
    const [teamBVisible, setTeamBVisible] = useState(false);
    const [teamCVisible, setTeamCVisible] = useState(false);

    return (
        <main className="team_page--content">
            <Header />
            <TeamMenu 
                showTeamA = {() => setTeamAVisible(true)}
                hideTeamA = {() => setTeamAVisible(false)}
                showTeamB = {() => setTeamBVisible(true)}
                hideTeamB = {() => setTeamBVisible(false)}
                showTeamC = {() => setTeamCVisible(true)}
                hideTeamC = {() => setTeamCVisible(false)}
            />
            {teamAVisible && <Team team={'A'} />}
            {teamBVisible && <Team team={'B'} />}
            {teamCVisible && <Team team={'C'} />}
        </main>
    )
}