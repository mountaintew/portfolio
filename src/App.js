import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Social from './components/Social';
import About from './components/About';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#e3e3e3"
    }
  },
  typography: {
    fontFamily: 'Source Sans Pro',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }


});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    },
    typography: {
      fontFamily: 'Source Sans Pro',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }

  }
});

function App() {
  const [light, setLight] = useState(true);
  return (
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <div className="App">
      
        <Navbar />
        <Hero/>
        <Social/>
        <About/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
