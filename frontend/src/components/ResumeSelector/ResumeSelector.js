import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import ResumeSelectButton from "./ResumeSelectButton/ResumeSelectButton";
import styles from "./ResumeSelector.module.css";
import UserIDContext from "../../App";
import Cookies from 'universal-cookie';

let baseResumeTemplate = {
    userid: "",
    Personal: {
        fname: "",
        lname: "",
        email: "",
        telephone: "",
        website: "",
        github: ""
    },
    Experience: [],
    Projects: [],
    Achievements: [],
    EducationHistory: {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        gpa: 0.0
    },
    Skills: [],
    CourseWork: [],
    Clubs: [],
    Hobbies: [],
    Hackathons: [],
}

const ResumeSelector = () => {
    let cookies = new Cookies(); 
    let userID = cookies.get("userID");
    
    const history = useHistory();
    const [templates, setTemplate] = useState([]);
    useEffect(() => {
        let fetchData = async() => {
            await axios.get(`/Template/getAll/${userID}`).then((result) => {
                console.log(result);
                setTemplate(result.data);
            });
        }
        fetchData();
    }, []);
    

    const selectResumeHandler = (resumeID) => {
        cookies.remove("resumeID");
        cookies.set("resumeID", resumeID);
        history.push("/resume");
        history.go(0);
    };

    const deleteResumeHandler = async (resumeID) => {
        await axios.delete(`/Template/${resumeID}/${userID}`)
        let updatedTemplates = templates.filter(template => template._id !== resumeID);
        setTemplate(updatedTemplates);
    };

    const createResumeHandler = async () => {
        baseResumeTemplate.userid = userID;
        await axios.post('/Template', baseResumeTemplate).then((response) => {
            let updatedTemplates = [...templates, response.data]
            setTemplate(updatedTemplates)
        });
    }

    const templateButtons = templates.map((val, id) => {
        return <ResumeSelectButton selectResume={() => selectResumeHandler(val._id)} deleteResume={() => deleteResumeHandler(val._id)} key={id} resumeid={val._id}>Resume</ResumeSelectButton>
    });

    return (
        <div>
            {templates.length === 0 ? (
                <div>
                    You have no resumes to select from...<br/>
                    Click [New Resume +] to get started!
                </div>
            ) : (
                <div>
                    {templateButtons}
                </div>
            )
        }
        <div onClick={() => createResumeHandler()} className={styles.NewResume}> New Resume + </div>
        </div>
    )
};

export default ResumeSelector;