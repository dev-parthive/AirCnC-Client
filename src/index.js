import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Contexts/AuthProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
    <Toaster/>
    <App />
    </AuthProvider>

);


