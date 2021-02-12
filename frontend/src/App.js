import React from "react";
import "./style.css";
import Personal from "./components/Personal/Personal"
import Additional from "./components/Additional/Additional";
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationHistory from "./components/EducationHistory/EducationHistory.js"

function App() {
    return (
        <div>
            Resume Builder
            <Personal />
            <EducationHistory />
            <Additional />
        </div>
    );
}

export default App;
