import _ from "lodash";
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchCars } from '../actions';

class CarsList extends Component {
    componentDidMount() {
        this.props.fetchCars();
    }

    renderList(){
        return _.map(this.props.cars, car => {
            return(
                    <div className="card mb-4" key={car.id}>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src={car.image} alt={car.title}/>
                            </div>
                            <div className="col-md-8">
                                <div className="py-2 pr-2">
                                    <h3 className="mb-0">
                                        <Link to={`/cars/${car.id}`} className="text-dark" >{car.title}</Link>
                                    </h3>
                                    <div className="mb-1 text-muted">
                                        <span class="badge badge-info">$ {car.price}</span>
                                    </div>
                                    <p className="card-text mb-auto">{car.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        });
    }

    render() {
        return (
            <div>
                {this.renderList()}
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

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
