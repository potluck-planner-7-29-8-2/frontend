import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import StateProvider from './utils/StateProvider'
import { mainReducer, initialState } from './reducers/mainReducer'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import * as reset from './styles/reset.css'
import * as global from './styles/global.css'


const GlobalStyle = createGlobalStyle`
    ${reset} 
    ${global}
    h1 {
        font-size: ${({theme}) => theme.hugeFont}
    }
    h2, h3 {
        font-size: ${({theme}) => theme.largeFont}
    }
    h4, h5 {
        font-size: ${({theme}) => theme.mediumFont}
    }
    body{
        font-family: ${({theme}) => theme.loraFont}
    }
`

const theme = {
    tinyFont: '1.2rem',
    smallFont: '1.8rem',
    mediumFont: '2.4rem',
    largeFont: '3.0rem',
    hugeFont: '4.0rem',
    poppinsFont: `"Poppins", sans-serif`,
    loraFont: `"Lora", serif`
}

ReactDOM.render(
        <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <Router>
                <StateProvider initialState={initialState} reducer={mainReducer}> 
                    <App />
                </StateProvider>
            </Router>
        </>
        </ThemeProvider>, 
document.getElementById('root'));

