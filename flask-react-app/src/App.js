import React from 'react';


// Components
import Navigation from './components/Navbar'
import Clock from './components/Clock'
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';

// Contexts
import ThemeContextProvider from './contexts/ThemeContext';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
      <Navigation />
        <Container>
          {/* <Clock /> */}
          <SplashPage />
        </Container>
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
