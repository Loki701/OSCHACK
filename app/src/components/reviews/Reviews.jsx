import { rating } from "../../images";
import "./Reviews.css";
import YouTubeVideo from "../youtube/Youtube";

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <h1>Reviews</h1>
      <div className="container">
        <figure class="snip1197">
          <figcaption>
            <blockquote>
              I love Dino Luzzy Energy Drink! It's the best energy drink I've
              ever had.
            </blockquote>
            <div class="arrow"></div>
          </figcaption>
          <img src={rating} />
          <div class="author">
            <h5>Saffire Matos</h5>
          </div>
        </figure>
        <figure class="snip1197 hover">
          <figcaption>
            <blockquote>
              Dino Luzzy Energy Drink is the best energy drink on the market. I
              love it! Been drinking it for years.
            </blockquote>
            <div class="arrow"></div>
          </figcaption>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample33.jpg"
            alt="sq-sample33"
          />
          <div class="author">
            <h5>John Doe</h5>
          </div>
        </figure>
      </div>
      <div className="container">
        <p>THE DINO LUZZI ENERGY DRINK</p>
        <h1>VIDEOS</h1>
        <YouTubeVideo videoId="rWwEqCfUXrI" />
      </div>
    </section>
  );
};

export default Reviews;
