import React from 'react';
import {StrictMode} from "react";
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  }
`

ReactDOM.render(
    <StrictMode>
        <Global/>
        <App/>
    </StrictMode>,
    document.getElementById('root')
);
