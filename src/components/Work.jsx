import "./WordCardStyle.css";
import ProjectCardData from "./WordCardData";
import WordCard from "./WordCard";

function Word() {
  return (
    <div className="word-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((item, index) => {
          return (
            <WordCard
              key={index}
              imgsrc={item.imgsrc}
              title={item.title}
              text={item.text}
              view={item.view}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Word;
