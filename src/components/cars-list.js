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
        // return this.props.cars.map((car) => {
        //     return(
        //         <div className="row mb-4" key={car.id}>
        //             <div className="col-md-4">
        //                 <img className="img-fluid" src={car.image}/>
        //             </div>
        //             <div className="col-md-8">
        //                 <h3 className="mb-0">
        //                     <Link to={`/cars/${car.id}`} className="text-dark" >{car.title}</Link>
        //                 </h3>
        //                 <div className="mb-1 text-muted">$ {car.price}</div>
        //                 <p className="card-text mb-auto">{car.description}</p>
        //             </div>
        //         </div>
        //     );
        // });
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
