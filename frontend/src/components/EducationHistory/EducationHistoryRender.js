import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style2.css'

function EducationHistoryRender(props) {

    return (

        <div>
            <h2>{props.school}</h2>
            <h3>{props.degree}</h3>
            <h4><FontAwesomeIcon icon={faCalendarAlt} /> {props.date} | GPA: {props.gpa}</h4>
        </div>
    );
}

export default EducationHistoryRender;