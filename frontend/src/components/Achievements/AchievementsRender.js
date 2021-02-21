import { faTrophy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css'

function AchievementsRender(props) {

    var arr = [];
    
    for (var i=0;i<props.count;i++) {
        arr.push (
            <div class="block">
                <div class="trophy"><FontAwesomeIcon icon={faTrophy} /></div>
                <div>
                    <h4 class="title">{props.title[i]}</h4>
                    <h4 class="desc">{props.desc[i]}</h4>
                </div>
            </div>
            
        )
    }

    return arr;
}

export default AchievementsRender;