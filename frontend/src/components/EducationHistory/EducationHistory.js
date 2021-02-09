import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// list of courses
const options = [
    { value: 'csc207', label: 'CSC207 - Software Design'},
    { value: 'csc209', label: 'CSC209 - Software Tools and Systems Programming'},
    { value: 'csc263', label: 'CSC263 - Data Structures and Analysis'},
    { value: 'csc301', label: 'CSC301 - Introduction to Software Engineering'},
    { value: 'csc343', label: 'CSC343 - Introduction to Databases'},

];

const animatedComponents = makeAnimated();

// styling for the select box
const customStyles = {
    container: (base, state) => ({
      ...base,
      border: state.isFocused ? null : null,
      transition:
        "border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease",
      "&:hover": {
        boxShadow: "0 2px 4px 0 rgba(41, 56, 78, 0.1)"
      }
    }),
    control: (base, state) => ({
      ...base,
      background: "white"
    }),
    valueContainer: (base, state) => ({
      ...base,
      background: "white"
    }),
    multiValue: (base, state) => ({
      ...base,
      background: "white",
      maxWidth: "100px"
    })
  };

function EducationHistory() {
    return (
        <div class="editmenu">
            <form>
                <div class="education">
                    <h3>Education History <FontAwesomeIcon icon={faSchool} /></h3>
                    <div class="form-row">
                        <div>
                            <label for="school">School</label><br></br>
                            <input type="text" id="school" name="school"></input>
                        </div>
                        <div>
                            <label for="degree">Degree</label><br></br>
                            <input type="text" id="degree" name="degree"></input>
                        </div>
                    </div>
                    <div class="form-row">
                        <div>
                            <label for="start_date">Start Date</label><br></br>
                            <input type="number" id="start_date" name="start_date" min="0"></input>
                        </div>
                        <div>
                            <label for="end_date">End Date</label><br></br>
                            <input type="number" id="end_date" name="end_date" min="0"></input>
                        </div>
                        <div>
                            <label for="gpa">GPA</label><br></br>
                            <input type="number" id="gpa" name="gpa" min="0.0" max="4.0" step="0.1"></input>
                        </div>
                        <div>
                            <label for="program">Program</label><br></br>
                            <input type="text" id="program" name="program"></input>
                        </div>
                        <div>
                            <label for="year">Year</label><br></br>
                            <input type="number" id="year" name="year" min="1"></input>
                        </div>
                    </div>
                </div>
                <label for="course_select" id="course_select_label">Relevent Courses Taken</label>   
                <Select 
                    id="course_select"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    options={options}
                    styles={customStyles}
                    isMulti
                    autoFocus
                    makeAnimated
                />
            </form>
        </div>
    );
}

export default EducationHistory;