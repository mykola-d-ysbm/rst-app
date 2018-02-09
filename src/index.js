import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from "redux-promise";

import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css'

import './index.css';

import CarsList from './components/cars-list';
import CarDetail from './components/car-detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer, composeWithDevTools())}>
        <BrowserRouter>
            <div className="container py-4">
                <Switch>
                    <Route path="/cars/:id" component={CarDetail}/>
                    <Route path="/cars" component={CarsList}/>
                    <Route path="/" component={CarsList}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
