import React, { useState } from "react";
import '../app.scss';
import ChooseCountryHeader from "../components/ChooseCountryHeader";
import ChooseCountryContent from "../components/ChooseCountryContent";
import ChooseCountryConfirm from "../components/ChooseCountryConfirm";

export default function ChooseCountryPage() {
    const [selectedCountry, setSelectedCountry] = useState(undefined);
    const [confirmVisible, setConfirmVisible] = useState(false);

    function customSetter(newValue) {
        setSelectedCountry(newValue);
    }

    return (
        <div className="choose_country-page">
            <ChooseCountryHeader selectedCountry={selectedCountry} setConfirmVisible={() => setConfirmVisible(true)}/>
            <ChooseCountryContent setSelectedCountry={customSetter} selectedCountry={selectedCountry}/>
            {confirmVisible && <ChooseCountryConfirm hideBox={() => setConfirmVisible(false)} selectedCountry={selectedCountry}/>}
        </div>
    )
}