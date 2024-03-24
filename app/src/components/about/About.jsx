import { canB } from "../../images";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>DINO LUZZI ENERGY DRINK</h1>
          <p>
            This delicious, healthful, energizing refresher made in Italy is
            distinguished from its more well-known competitors by its decided
            non-metallic after taste. Dino Luzzi Energy Drink is rapidly
            expanding. If you do not see it in your favorite store please let us
            know!
          </p>
        </div>
        <div className="about-image">
          <img src={canB} alt="" />
        </div>
      </div>
      <ul className="card-container">
        <li className="card">
          {/* <img src="" alt="" /> */}
          <span class="material-symbols-outlined">list_alt</span>
          <h2>EXTRA LOW CALORIE</h2>
          <p>
            With only 115 calories and 0 fat it still gives you the same maximum
            energy boost.
          </p>
        </li>
        <li className="card">
          <span class="material-symbols-outlined">electric_bolt</span>
          <h2>MAXIMUM ENERGY</h2>
          <p>
            Designed with ingredients that help promote clarity and focus over
            the duration of an entire workday or evening.
          </p>
        </li>
        <li className="card">
          <span class="material-symbols-outlined">spa</span>
          <h2>SMART ORGANICS</h2>
          <p>
            We believe there is a smarter way to provide you with good energy
            that allows you to fulfill your greatest dreams and aspirations.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default About;
