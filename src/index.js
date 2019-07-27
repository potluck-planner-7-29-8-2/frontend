import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import App from './App';
import StateProvider from './utils/StateProvider'
import { mainReducer, initialState } from './reducers/mainReducer'
import './index.css'
import * as reset from './styles/reset.css'
import * as global from './styles/global.css'

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${global}
`

const theme = {

}

ReactDOM.render(
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <StateProvider initialState={initialState} reducer={mainReducer}>
                <App />
            </StateProvider>
        </ThemeProvider>
    </>, 
document.getElementById('root'));

