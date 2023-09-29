import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import App from './App';
// import Resigter from './components/Resigter';
import APIproject from './components/APIproject';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Resigter/> */}
    <APIproject/>


  </React.StrictMode>
);


