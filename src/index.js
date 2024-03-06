
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { storeLogin } from './Redux/store';
import GetUserDataContext from './context/getUserData';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={storeLogin}>
        <GetUserDataContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GetUserDataContext>
    </Provider>
);


