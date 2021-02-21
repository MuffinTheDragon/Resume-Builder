import React from "react";
import "./style.css";
import Personal from "./components/Personal/Personal"
import Experience from "./components/Experience/Experience"
import Additional from "./components/Additional/Additional";
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationHistory from "./components/EducationHistory/EducationHistory"
import EducationHistoryRender from "./components/EducationHistory/EducationHistoryRender"
import AchievementsRender from "./components/Achievements/AchievementsRender"

function App() {
    return (
        <div>
            Resume Builder
            <Personal />
            <EducationHistory />
            <Experience />
            <Additional />
            <EducationHistoryRender school="University of Toronto" degree="H.B.Sc Computer Science & Statistics" date="Sept 2015 - June 2020" gpa="3.7"/>
            <hr></hr>
            <AchievementsRender count="2" title={['Dean\'s List (2018-2020)', 'Honorable Mention (Top 20)']} desc={['GPA of 3.50 or above', 'Adobe Creative Jams, 3 times']} />
        </div>
    );
}

export default App;
