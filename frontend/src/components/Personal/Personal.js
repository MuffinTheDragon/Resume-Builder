import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Personal() {
    return (
        <div class="editmenu">
            <form>
                <div class="personal">
                    <h3>Personal <FontAwesomeIcon icon={faCoffee} /></h3>
                    <div class="form-row">
                        <div>
                            <label for="fname">First name</label><br></br>
                            <input type="text" id="fname" name="fname"></input>
                        </div>
                        <div>
                            <label for="lname">Last name</label><br></br>
                            <input type="text" id="lname" name="lname"></input>
                        </div>
                    </div>
                    <div class="form-row">
                        <div>
                            <label for="email">Email</label><br></br>
                            <input type="email" id="email" name="email"></input>
                        </div>
                        <div>
                            <label for="phonenumber">Phone Number</label><br></br>
                            <input type="text" id="phonenumber" name="phonenumber"></input>
                        </div>
                    </div>
                    <div class="form-row">
                        <div>
                            <label for="personalwebsite">Personal Website</label><br></br>
                            <input type="text" id="personalwebsite" name="personalwebsite"></input>
                        </div>
                        <div>
                            <label for="github">GitHub</label><br></br>
                            <input type="text" id="github" name="github"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Personal;
