import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';

import CarsList from './components/cars-list';
import CarDetails from './components/car-details';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={CarsList}/>
            <Route path="/cars" component={CarsList}/>
            <Route path="/cars/:id" component={CarDetails}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();