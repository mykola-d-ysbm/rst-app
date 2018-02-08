import React, { Component } from 'react';
import CarDetail from './car-detail';

export default class CarDetailRoute extends Component {
    render () {
        let carId = this.props.match.params.id;
        return <CarDetail carId={carId} />;
    }
};