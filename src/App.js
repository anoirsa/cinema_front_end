import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SlideItems } from './data/SlideItems';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import Listings from './components/Listings';
import Features from './components/Features';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';

function App() {
  
 useEffect(() => {
    Aos.init({});  
  },[])
  return (
    <div className="App">
        <Navbar />
        <Hero slides={SlideItems} />
        <InfoSection  {...InfoData} />
        <Listings />
        <Features />  
        <Footer />
       
    </div>
  );
}

export default App;
