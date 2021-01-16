import React from 'react';
import './App.css';
import {store} from "./store/store";
import {Provider} from "react-redux";
import {RouterModule} from "./router";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RouterModule/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
