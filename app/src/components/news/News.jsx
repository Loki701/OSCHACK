import "./News.css";
import { news1, news2, news3 } from "../../images";

const News = () => {
  const images = [
    {
      src: news1,
      link: "https://finance.yahoo.com/news/ifbc-dino-luzzi-energy-drink-230000305.html?.tsrc=fin-srch",
    },
    {
      src: news2,
      link: "https://finance.yahoo.com/news/ifbc-dino-luzzi-energy-drink-230000305.html?.tsrc=fin-srch",
    },
    {
      src: news3,
      link: "https://www.kxan.com/business/press-releases/accesswire/845863/dino-luzzi-energy-drink-is-set-to-energize-the-university-of-floridas-tech-community-as-the-main-sponsor-of-the-apply-model-optimize-nurturing-gator-unity-and-synergy-hackathon/",
    },

    {
      src: news1,
      link: "https://finance.yahoo.com/news/ifbc-dino-luzzi-energy-drink-230000305.html?.tsrc=fin-srch",
    },
    {
      src: news2,
      link: "https://finance.yahoo.com/news/ifbc-dino-luzzi-energy-drink-230000305.html?.tsrc=fin-srch",
    },
    {
      src: news3,
      link: "https://www.kxan.com/business/press-releases/accesswire/845863/dino-luzzi-energy-drink-is-set-to-energize-the-university-of-floridas-tech-community-as-the-main-sponsor-of-the-apply-model-optimize-nurturing-gator-unity-and-synergy-hackathon/",
    },

    {
      src: news1,
      link: "https://finance.yahoo.com/news/ifbc-dino-luzzi-energy-drink-230000305.html?.tsrc=fin-srch",
    },
    {
      src: news2,
      link: "https://finance.yahoo.com/news/ifbc-dino-luzzi-energy-drink-230000305.html?.tsrc=fin-srch",
    },
    {
      src: news3,
      link: "https://www.kxan.com/business/press-releases/accesswire/845863/dino-luzzi-energy-drink-is-set-to-energize-the-university-of-floridas-tech-community-as-the-main-sponsor-of-the-apply-model-optimize-nurturing-gator-unity-and-synergy-hackathon/",
    },
    {
        src: news1,
        link: "https://finance.yahoo.com/news/ifbc-dino-luzzi-energy-drink-230000305.html?.tsrc=fin-srch",
      },
  ];
  const handleClick = (link) => {
    window.open(link, '_blank');
  };
  return (
    <section id="news" className="news">
      <div className="container">
        <p className="section-subtitle">THE DINO LUZZI LATEST</p>
        <h2 className="section-title">NEWS</h2>
        <p className="section-subtitle">
          IFBC DINO LUZZI ENERGY DRINK IN THE RACING WORLD
        </p>
      </div>

      <div className="gallery">
        {images.map((image, index) => (
          <span key={index} style={{ "--i": index + 1 }}>
            <img src={image.src} onClick={() => handleClick(image.link)} alt="" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default News;
