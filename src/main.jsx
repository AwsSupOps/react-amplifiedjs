import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authenticator } from '@aws-amplify/ui-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authenticator.Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Authenticator.Provider>
)
