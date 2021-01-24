import React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';

// css
import './styles/index.css';

const rootElement = document.getElementById("root");

/*
  React-Snap

  React pre-renders pages
  
  # This improve First Paint times in your application

*/
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
