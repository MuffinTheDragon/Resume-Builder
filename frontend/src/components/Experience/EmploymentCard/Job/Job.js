import React from "react";
import "../style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Job() {
    return (
		<div class="employment-section collapsible">
			<div class="employment-row">
				<div class="flex-col">
					<label for="companyname">Company</label>
					<input type="text" id="companyname" name="companyname"></input>
				</div>
				<div class="flex-col">
					<label for="role">Role</label>
					<input type="text" id="role" name="role"></input>
				</div>
			</div>
			<div class="employment-row employment-date">
				<div class="flex-col">
					<label for="startdate">Start Date</label>
					<input type="text" id="startdate" name="startdate"></input>
				</div>
				<div class="flex-col">
					<label for="enddate">End Date</label>
					<input type="text" id="enddate" name="enddate"></input>
				</div>
			</div>
			<div class="employment-row employment-description">
				<div class="flex-col">
					<label for="jobdescription">Description</label>
					<textarea type="text" id="jobdescription" name="jobdescription"></textarea>
				</div>
			</div>
			<div class="employment-row employment-options">
				<div>
					<FontAwesomeIcon icon={faCheckSquare} size={"2x"} color={"#00FF00"} />
				</div>
				<div>
					<FontAwesomeIcon icon={faTrashAlt} size={"2x"} color={"#FF0000"} />
				</div>
				
			</div>
		</div>
	
    );
}
export default Job;