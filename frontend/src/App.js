import React from 'react'

//GlobalStyle
import GlobalStyle from './components/GlobalStyle';
//Components
import AboutUs from './pages/AboutUs'


function App() {
  return (
  <div>
    <GlobalStyle/> 
      <AboutUs />
    </div>
  );
}

export default App;
