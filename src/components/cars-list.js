import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCars from '../actions';

class CarsList extends Component {
    componentDidMount () {
        this.props.fetchCars();
    }

    render() {
        return (
            <div>
                Cars List
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    };
}

export default connect(mapStateToProps, null)(CarsList);
