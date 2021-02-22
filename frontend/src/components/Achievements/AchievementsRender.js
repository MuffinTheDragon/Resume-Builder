import { faTrophy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css'

function AchievementsRender(props) {
    
    const titles = props.title;
    const arr = titles.map((title, index) => {
        return (
            <div class="block">
                <div class="trophy"><FontAwesomeIcon icon={faTrophy} /></div>
                <div>
                    <h4 class="title">{title}</h4>
                    <h4 class="desc">{props.desc[index]}</h4>
                </div>
            </div>
        
            );
        })
    return arr;
}

export default AchievementsRender;