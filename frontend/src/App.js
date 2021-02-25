import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Resume from "./components/Resume/Resume";

const App = () => {
    const DummyResume = {
        Personal: {
            name: "Jonathan Wang :D",
            email: "jonw.wang@mail.utoronto.ca",
            telephone: "5555555555",
            linkedin: "in/jonathan-yc-wang",
            github: "github.com/JonathanYcWang"
        },
        Experience: [{
            title: "Teaching Assistant",
            subtitle: "University of Toronto",
            startDate: "Jan 2020",
            endDate: "Dec 2020",
            location: "Toronto, ON",
            desc: ["Lorem Ipsum", "pancakes and waffles"]
        },
        {
            title: "Professional Potato",
            subtitle: "Home",
            startDate: "When I was born",
            endDate: "Till I die",
            location: "Home",
            desc: ["Potato", "Professional", "Yes"]
        },
        {
            title: "Professional Waffle",
            subtitle: "wafflehouse",
            startDate: "When I was born",
            endDate: "Till I die",
            location: "Home",
            desc: ["Potato", "Professional", "Yes"]
        }],
        Projects: [{
            title: "Projects",
            subtitle: "Very Cool Project",
            startDate: "Jan 2020",
            endDate: "Dec 2020",
            location: "Toronto, ON",
            desc: ["I did cool stuff", "Code to brrrrr"]
        },
        {
            title: "Another Cool Project",
            subtitle: "WOOOOOOOOOOOO",
            startDate: "Jan 2021",
            endDate: "Dec 2025",
            location: "LOL",
            desc: ["COOOOOOOOOL", "doggohehe"]
        }],
        Achievements: [{
            title: 'Dean\'s List (2018-2020)',
            desc: 'GPA of 3.50 or above'
        },
        {
            title: 'Honorable Mention',
            desc: 'Adobe Creative Jams'
        }],
        EducationHistory: [{
            school: "University of Toronto",
            degree: "H.B.Sc Computer Science & Statistics",
            date: "Sept 2015 - June 2020",
            gpa: "3.7"
        },
        {
            school: "HS",
            degree: "Ontario Diploma of something",
            date: "Sept 2014 - June 2015",
            gpa: "10 (Max 5 went above and beyond)"
        }],
        Skills: ["Java", "Python", "MySQL", "NoSQL", "REST", "Spring", "JavaScript", "Vue", "React", "Node", "Express", "HTML", "CSS", "Bootstrap", "Firebase", "Android", "Git", "Unix", "Agile", "Scrum", "SDLC", "Jira"],
        CourseWork: ["Algorithms & Data Structures Analysis", "Software Engineering", "Software Design", "Databases", "Human-Computer Interface", "Computational Complexity & Computability", "Systems Programming", "Game Design"]
    };
    
    return (
        <div class="d-flex w-100">
            <div id="editor" class="w-65">
            </div>
            <Resume resume={DummyResume}/>
        </div>
    );
}

export default App;
