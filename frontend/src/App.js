import React from "react";
import "./style.css";
import Personal from "./components/Personal/Personal.js"
import EducationHistory from "./components/EducationHistory/EducationHistory.js"

function App() {
    return (
        <div>
            Resume Builder
            <Personal />
            <EducationHistory />
        </div>
    );
}

export default App;
