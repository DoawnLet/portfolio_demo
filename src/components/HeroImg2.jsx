import { Component } from "react";
import "./HeroImg2Style.css";

const HeroImg2 = ({ heading, text }) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;

// ngoài ra còn một cách khác: sử dụng extend
// class HeroImg2 extends Component {
//   render() {
//     return (
//       <div className="hero-img">
//         <div className="heading">
//           <h1>{heading}</h1>
//           <p>{text}</p>
//         </div>
//       </div>
//     );
//   }
// }
