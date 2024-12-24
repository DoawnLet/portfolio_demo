import "./WordCardStyle.css";
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

function WordCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="imgage" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="btns-container">
          <NavLink to={props.view} className="btn">
            SOURCE
          </NavLink>
          <NavLink to="url.com" className="btn">
            VIEW
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default WordCard;
