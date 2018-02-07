import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css'

import './index.css';

import CarsList from './components/cars-list';
import CarDetail from './components/car-detail';

const store = createStore(rootReducer, composeWithDevTools(
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="container py-4">
                <Route exact path="/" component={CarsList}/>
                <Route exact path="/cars" component={CarsList}/>
                <Route path="/cars/:id" component={CarDetail}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
