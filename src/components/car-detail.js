import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';

class CarDetail extends Component {
    componentDidMount() {
        this.props.fetchCars();
    }

    renderCar() {
        var car = this.props.cars.find(item => item.id === 2);
        return(
            <div className="row mb-4" key={car.id}>
                <div className="col-md-4">
                    <img className="img-fluid" src={car.image} alt={car.title}/>
                </div>
                <div className="col-md-8">
                    <h3 className="mb-0">
                        {car.title}
                    </h3>
                    <div className="mb-1 text-muted">$ {car.price}</div>
                    <p className="card-text mb-auto">{car.description}</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderCar()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCars: fetchCars
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);