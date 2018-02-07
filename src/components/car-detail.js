import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCar } from '../actions';

class CarDetail extends Component {
    componentDidMount() {
        this.props.fetchCar(2);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.car.image}/>
                    <div>{this.props.car.pric}</div>
                    <div>{this.props.car.title}</div>
                    <div>{this.props.car.description}</div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        car: state.car
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCar: fetchCar
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);