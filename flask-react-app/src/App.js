import React from 'react';


// Components
import Navigation from './components/Navbar'
import Clock from './components/Clock'
// Contexts
import ThemeContextProvider from './contexts/ThemeContext';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <Navigation />
        <Clock />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
