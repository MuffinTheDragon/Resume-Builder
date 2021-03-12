import React, {useReducer, createContext} from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";
import Resume from "./components/Resume/Resume";

const reducer = (_, newState)  => {
    console.log(newState);
    return {...newState};
};
export const ResumeContext = createContext();

const App = () => {
    let DummyResume = {
        Personal: {
            fname: "John",
            lname: "Doe",
            email: "Jon@Doe.com",
            telephone: "1234567890",
            website: "JonDoe.ca",
            github: "github.com/JD"
        },
        Experience: [{
            id: 0,
            title: "Teaching Assistant",
            subtitle: "University of Toronto",
            startDate: "2020-01",
            endDate: "2020-12",
            location: "Toronto, ON",
            desc: ["Lorem Ipsum", "pancakes and waffles"]
        },
        {
            id: 1,
            title: "Teaching Assistant",
            subtitle: "University of Toronto",
            startDate: "2020-01",
            endDate: "2020-12",
            location: "Toronto, ON",
            desc: ["Lorem Ipsum", "pancakes and waffles"]
        }],
        Projects: [{
            id: 0,
            title: "Projects",
            subtitle: "Very Cool Project",
            startDate: "2020-01",
            endDate: "2021-02",
            desc: ["I did cool stuff", "Code go brrrrr"]
        },
        {
            id: 1,
            title: "Another Cool Project",
            subtitle: "WOOOOOOOOOOOO",
            startDate: "2019-03",
            endDate: "2021-03",
            desc: ["COOOOOOOOOL", "doggohehe"]
        }],
        Achievements: [{
            id: 0,
            title: 'Dean\'s List (2018-2020)',
            desc: 'GPA of 3.50 or above'
        },
        {
            id: 1,
            title: 'Honorable Mention',
            desc: 'Adobe Creative Jams'
        }],
        EducationHistory: {},
        Skills: [],
        CourseWork: [],
        Hobbies: [],
        Clubs: [{
            id: 0,
            title: "Cool Kids Club",
            startDate: "2018-05",
            endDate: "2019-06",
            desc: ["coolin' around"]
        }],
        Hobbies: []
    };
    const [resumeState, setResume] = useReducer(reducer, DummyResume);

    return (
        <div className="d-flex w-100">
            <ResumeContext.Provider value={{resumeState, setResume}}>
                <ResumeBuilder/>
                <Resume/>
            </ResumeContext.Provider>
        </div>
    );
}

export default App;
