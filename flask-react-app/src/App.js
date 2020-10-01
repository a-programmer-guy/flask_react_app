import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



// Components
import Navigation from './components/Navbar'
// import Clock from './components/Clock'
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
import SignUp from './components/SignUp'
import UploadImage from './components/UploadImage';
import UserList from './components/UserList';

// Contexts
import ThemeContextProvider from './contexts/ThemeContext';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <Router>
      <div className="App">
        <ThemeContextProvider>
        <Navigation />
          <Container fluid>
            <Switch>
              <Route exact path='/sign_up' component={SignUp} />
              <Route exact path='/upload' component={UploadImage} />
              <Route exact path={['/', '/sign_in', '/home']} component={SplashPage} />
              <Route exact path='users' component={UserList} />
            </Switch>
          </Container>
          <Footer />
        </ThemeContextProvider>
      </div>
    </Router>
  );
}

export default App;
