import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';

//для собственной темизации
import { createTheme, ThemeProvider } from '@mui/material/styles';
//позволяет точечно в существующей теме что-то поменять
const theme = createTheme({
    palette: {
        primary: {
            main: '#61dafb'
        },
        secondary: {
            main: '#da61bf'
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
