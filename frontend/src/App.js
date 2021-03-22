import React, {useReducer, createContext, useState, useEffect} from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";
import Resume from "./components/Resume/Resume";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from "./components/Login/Login";
import axios from "./axios";
import ResumeSelector from "./components/ResumeSelector/ResumeSelector";

let DummyResume = {
    userid: "Gcdh2MbzojTueOZhfvlgLAEaNDO2",
    Personal: {
        fname: "CHICKEN DONG",
        lname: "DONG",
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
    Clubs: [{
        id: 0,
        title: "Cool Kids Club",
        startDate: "2018-05",
        endDate: "2019-06",
        desc: ["coolin' around"]
    }],
    Hobbies: ["Sleeping", "Gaming", "Cooking", "Skiing"],
    Hackathons: [{
        id: 0,
        title: "BuddyStudyOnline",
        subtitle: "Study with a buddy now",
        startDate: "2021-03",
        endDate: "2021-03",
        desc: ["Real time chat", "Video chat with others"]
    }],
};


const reducer = (_, newState)  => {
    axios.post(`/Template`, DummyResume)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
    return {...newState};
};

let areducer = (_, userID) => {
    console.log(userID);
};

export const ResumeContext = createContext();
export const UserIDContext = createContext();

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
        Clubs: [{
            id: 0,
            title: "Cool Kids Club",
            startDate: "2018-05",
            endDate: "2019-06",
            desc: ["coolin' around"]
        }],
        Hobbies: ["Sleeping", "Gaming", "Cooking", "Skiing"],
        Hackathons: [{
            id: 0,
            title: "BuddyStudyOnline",
            subtitle: "Study with a buddy now",
            startDate: "2021-03",
            endDate: "2021-03",
            desc: ["Real time chat", "Video chat with others"]
        }],
    };

    const [resumeState, setResume] = useReducer(reducer, DummyResume);
    const [userID, setUserID] = useReducer(areducer, "");

    return (
        <BrowserRouter>
            <Switch>
                <Route path ='/login'>
                    <UserIDContext.Provider value={{userID, setUserID}}>
                        <Login />
                    </UserIDContext.Provider>
                </Route>
                <Route path ='/select'>
                    <UserIDContext.Provider value={{userID, setUserID}}>
                        <ResumeSelector />
                    </UserIDContext.Provider>
                </Route>
                <Route path = "/resume">
                    <div className="d-flex w-100">
                        <ResumeContext.Provider value={{resumeState, setResume}}>
                            <ResumeBuilder/>
                            <Resume/>
                        </ResumeContext.Provider>
                    </div>
                </Route> 
                <Route path = '/'>
                </Route> 
            </Switch>
        </BrowserRouter>

    );
}

export default App;
