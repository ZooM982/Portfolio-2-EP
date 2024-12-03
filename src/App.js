import './App.css';
import Aptitude from './components/Aptitude';
import Client from './components/Client';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Formation from './components/Formation';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App transition duration-400">
      <Navbar />
      <Hero />
      <Experience />
      <Formation />
      <Client />
      <Aptitude />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
