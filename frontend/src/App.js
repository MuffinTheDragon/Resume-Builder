import React from "react";
import "./style.css";
import Personal from "./components/Personal/Personal"
import Experience from "./components/Experience/Experience"
import Additional from "./components/Additional/Additional";
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationHistory from "./components/EducationHistory/EducationHistory"

function App() {
    return (
        <div>
            Resume Builder
            <Personal />
            <EducationHistory />
            <Experience />
            <Additional />
        </div>
    );
}

export default App;
