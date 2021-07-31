import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SlideItems } from './data/SlideItems';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero slides={SlideItems} />
    </div>
  );
}

export default App;
