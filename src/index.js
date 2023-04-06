import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header_class_component from './components/Header_class_component';
import Header_function from './components/Header_function';
import Car from './components/Car';
import header_function_component from './components/Header_function_component';
import reportWebVitals from './reportWebVitals';
import Header_function_component from './components/Header_function_component';
import Football from './components/Football';
import Garage from './components/Garage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

      <Header_class_component property = "class component"/>
      
      <App />
    </>
  </React.StrictMode>
);
/**
 * 
 *  <Garage/>
    <Car />
    <Football /> <Header_function_component property = "function component"/>
    <Header_function />
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
