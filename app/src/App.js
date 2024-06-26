import './App.css';
import About from './components/about/About';
import Feature from './components/feature/Feature';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import News from './components/news/News';
import RacingTeam from './components/racingteam/RacingTeam';
import Reviews from './components/reviews/Reviews';
import Location from './components/location/Location';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Chatbot from './components/chatbot/Chatbot';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Feature />
      <News />
      <Reviews />
      <RacingTeam />
      <Location />
      <Contact />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
