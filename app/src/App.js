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


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <News />
      <Reviews />
      <RacingTeam />
      <About />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
