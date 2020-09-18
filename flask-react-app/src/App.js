import React from 'react';


// Components
import Navigation from './components/Navbar'
// import Clock from './components/Clock'
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
import SignUp from './components/SignUp'
import UploadImage from './components/UploadImage'

// Contexts
import ThemeContextProvider from './contexts/ThemeContext';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
      <Navigation />
        <Container fluid>
          <SignUp />
          <UploadImage />
          <SplashPage />
        </Container>
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
