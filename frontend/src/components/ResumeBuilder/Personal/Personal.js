import React from "react";
import styles from "./Personal.module.css";
import shared from "../../Shared.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Personal() {
    return (
        <div class={shared.editmenu}>
            <form>
                <div class={styles.personal}>
                    <h3>Personal <FontAwesomeIcon icon={faUser} /></h3>
                    <hr/>
                    <div class={shared.formRow}>
                        <div>
                            <label for="fname">First name</label><br></br>
                            <input type="text" id="fname" name="fname"></input>
                        </div>
                        <div>
                            <label for="lname">Last name</label><br></br>
                            <input type="text" id="lname" name="lname"></input>
                        </div>
                    </div>
                    <div class={shared.formRow}>
                        <div>
                            <label for="email">Email</label><br></br>
                            <input type="email" id="email" name="email"></input>
                        </div>
                        <div>
                            <label for="phonenumber">Phone Number</label><br></br>
                            <input type="text" id="phonenumber" name="phonenumber"></input>
                        </div>
                    </div>
                    <div class={shared.formRow}>
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
