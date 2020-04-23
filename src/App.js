import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const app_id = 550487078925958;
  const redirect_uri = 'https://keubs.webfactional.com/';
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let foo = params.get('query');
  console.log(foo);
  return (
    <div className="App">
      <header className="App-header">
        <a href={`https://api.instagram.com/oauth/authorize?client_id=${app_id}&redirect_uri=${redirect_uri}&scope=user_profile,user_media&response_type=code`}>authorize app</a>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
