import React from 'react';
import Navigation from './components/Header/Navigation';
import Masthead from './components/Header/Masthead';
import Services from './components/Services/Services';
import About from './components/About/About';
import Team from './components/Team/Team';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioGrid from './components/Portfolio/PortfolioGrid';
import PortfolioModal from './components/Portfolio/PortfolioModal';


function App() {
  return (
    <>
    <Navigation />
    <Masthead />
    <Services />
    <PortfolioGrid />
    <PortfolioModal />
    <About />
    <Team />
    <Clients />
    <Contact />
    <Footer />
    
    
    
    
    </>
    
  );
}

export default App;
