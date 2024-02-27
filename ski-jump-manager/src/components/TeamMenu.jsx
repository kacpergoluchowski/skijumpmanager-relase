import React from "react";
import '../app.scss';

export default function TeamMenu( {showTeamA, showTeamB, showTeamC, hideTeamA, hideTeamB, hideTeamC} ) {
    function teamA() {
        showTeamA();
        hideTeamB();
        hideTeamC();
    }

    function teamB() {
        showTeamB();
        hideTeamA();
        hideTeamC();
    }

    function teamC() {
        showTeamC();
        hideTeamB();
        hideTeamA();
    }

    return (
        <nav className="team_page--content--menu">
            <button onClick={teamA}> Kadra A </button>
            <button onClick={teamB}> Kadra B </button>
            <button onClick={teamC}> Kadra C </button>
        </nav>
    )
}