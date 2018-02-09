import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCar } from '../actions';

class CarDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchCar(id);
        console.log('componentDidMount',this.props);
    }

    render() {
        const { car } = this.props;

        if (!car) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div>
                    <img src={this.props.car.image}/>
                    <div>{this.props.car.price}</div>
                    <div>{this.props.car.title}</div>
                    <div>{this.props.car.description}</div>
                </div>
            </div>
        );
    }
}
function mapStateToProps({ cars }, ownProps) {
    return {
        car: cars[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { fetchCar })(CarDetail);