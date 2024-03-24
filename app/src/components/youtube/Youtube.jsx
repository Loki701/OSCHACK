import './Youtube.css';

const YouTubeVideo = ({ videoId , width ='1000', height = '600' }) => {
    return (
      <div className="video-container" >
        <iframe
          alt="youtube"
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

export default YouTubeVideo;