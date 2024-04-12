import React from 'react'
import ReactDOM from 'react-dom/client'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
    <App />
    </LocalizationProvider>
  </React.StrictMode>
  </BrowserRouter>,
)
serviceWorker.unregister();