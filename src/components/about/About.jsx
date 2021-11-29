import "./about.css";
import Award from "../../img/award.png";
import awa from "../../img/award.jpg"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={awa}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I M Computer sciences student i have done in MCs University of
    karachi (UBIT)
        </p>
        <p className="a-desc">
  
    i have rich experiences in websites Designing and web application ,
    also i m good in html, css, scss, Bootstrap java script, and
    Intermediate Node js, Express js, Mongodb, React js/Angular js
    i recently work in MEAN stack Technology
      Tech Empire Pvt ltd
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">MCS</h4>
            <p className="a-award-desc">
            University of karachi Graduation Awards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
