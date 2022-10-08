import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://ms-finance.p.rapidapi.com/news/list',
  params: {performanceId: '0P0000OQN8'},
  headers: {
    'X-RapidAPI-Key': '519c620a95msh510f3d03b882ffcp1ec600jsn5552708514d8',
    'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
  }
};



const root = ReactDOM.createRoot(document.getElementById('root'));


class APIComponent extends React.Component{
  render(){
    {axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });} 

    return (
      <p> API incorporated </p>
    );
  }
}

root.render( 
  <React.StrictMode>
    <App />
    <APIComponent />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
