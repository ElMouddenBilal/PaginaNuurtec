// src/App.jsx
import './App.css';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Future from './components/Future';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import ProblemSolution from './components/ProblemSolution';
import SeccionCTA from './components/SeccionCTA';

function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <ProblemSolution />
      <HowItWorks />  
      <Benefits />
      <SeccionCTA />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;