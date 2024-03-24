import Button from "../button/Button";
import "./Feature.css";
import { cans } from "../../images";

const Feature = () => {
  return (
    <section id="features" className="feature">
      <div className="feature-container">
        <h1>REFRESHINGLY EPIC TASTE</h1>
        <div className="feature-description">
          <img src={cans} alt="feature" />
          <div className="ingredient-container">
            <div className="ingredient-row">
              <div className="ingredient">
                <h3>VITAMIN B2</h3>
                <p>
                  Vitamin B2 helps break down fats, proteins, and carbohydrates.
                  B2 plays a vital role in maintaining the body’s energy supply.{" "}
                </p>
              </div>
              <div className="ingredient">
                <h3>VITAMIN B6</h3>
                <p>
                  Vitamin B6 helps with muscle repair. Vitamins are essential
                  micronutrients that are required for maintaining normal body
                  functions.
                </p>
              </div>
            </div>
            <div className="ingredient-row">
              <div className="ingredient">
                <h3>VITAMIN B12</h3>
                <p>Vitamin B12 helps keep blood and nerve cells healthy.</p>
              </div>
              <div className="ingredient">
                <h3>ZERO FAT</h3>
                <p>Made with zero fat or cholesterol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="buy" className="buy-container">
        <div className="buy-column">
        <p>GET YOUR</p>
        <h1>DINO LUZZI ENERGY</h1>
        <img src={cans} alt="product" />
        </div>
        <div className="buy-column">
        <h2>
              DINO LUZZI ENERGY DRINK, 250 ML (IN CASES OF 24 OR 6)
            </h2>
            <Button title="Buy Now" id="location" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
