import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import ResumeSelectButton from "./ResumeSelectButton/ResumeSelectButton";
import styles from "./ResumeSelector.module.css";

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
    EducationHistory: {},
    Skills: [],
    CourseWork: [],
    Clubs: [],
    Hobbies: [],
    Hackathons: [],
}

const ResumeSelector = () => {
    // const {userID, _} = useContext(UserIDContext);
    const history = useHistory();
    const [templates, setTemplate] = useState([]);
    useEffect(() => {
        let fetchData = async() => {
            let userID = "Gcdh2MbzojTueOZhfvlgLAEaNDO2";
            await axios.get(`/Template/getAll/${userID}`).then((result) => {
                console.log(result);
                setTemplate(result.data);
            });
        }
        fetchData();
    }, []);
    

    const selectResumeHandler = (resumeID) => {
        history.push("/resume");
    };

    const deleteResumeHandler = async (resumeID) => {
        let userID = "Gcdh2MbzojTueOZhfvlgLAEaNDO2";
        await axios.delete(`/Template/${resumeID}/${userID}`)
        let updatedTemplates = templates.filter(template => template._id !== resumeID);
        setTemplate(updatedTemplates);
    };

    const createResumeHandler = async () => {
        // When creating the resume, do a get and redirect to that new resume
        let userID = "Gcdh2MbzojTueOZhfvlgLAEaNDO2";
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