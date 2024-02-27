import React from "react";
import '../app.scss';
import Header from "./Header";
import HomePageDashboard from "./HomePageDashboard";

export default function HomePageContent() {
    return (
        <div className="home_page_content">
            <Header />
            <HomePageDashboard />
        </div>
    )
}