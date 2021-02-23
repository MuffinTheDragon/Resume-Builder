import React from "react";
import "./style.css";
import Personal from "./components/Personal/Personal"
import Experience from "./components/Experience/Experience"
import Additional from "./components/Additional/Additional";
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationHistory from "./components/EducationHistory/EducationHistory"
import JobExperienceResume from "./components/ResumeTemplates/JobExperienceResume/JobExperienceResume"

function App() {
    return (
        <div class="d-flex w-100">
            <div id="editor" class="w-65">
                <Personal />
                <EducationHistory />
                <Experience />
                <Additional />
            </div>
            <div id="resumeRender">
                <JobExperienceResume />
            </div>
        </div>
    );
}

export default App;
