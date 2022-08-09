import React from 'react';
import { Router, Switch, Route, Link, useHistory } from 'react-router-dom'
import history from './components/History'

// Components
import Navigation from './components/Navbar'
// import Clock from './components/Clock'
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
import SignUp from './components/SignUp'
import UploadImage from './components/UploadImage';
import UserList from './components/UserList';
import Home from './components/Home'

import Greeting from './components/Greeting'

// Contexts
import ThemeContextProvider from './contexts/ThemeContext';
import { Container } from 'react-bootstrap';
import { RandomUserProvider } from './components/RandomUserContext'

function App() {

  return (
    <Router history={history}>
      <div className="App">
        <ThemeContextProvider>
        <RandomUserProvider>
        <Navigation />
          <Container fluid>
            <Switch>
              <Route exact path='/sign_up' component={SignUp} />
              <Route exact path='/upload' component={UploadImage} />
              <Route exact path={['/', '/sign_in']} component={SplashPage} />
              <Route exact path='/users' component={UserList} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/greeting' component={Greeting} />
            </Switch>
          </Container>
          <Footer />
          </RandomUserProvider>
        </ThemeContextProvider>
      </div>
    </Router>
  );
}

export default App;
