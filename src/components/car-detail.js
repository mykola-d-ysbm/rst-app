import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
                <div className="mb-4">
                    <Link className="btn btn-secondary" to={'/cars'}>Back To Cars List</Link>
                </div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src={this.props.car.image} alt={this.props.car.title} />
                        </div>
                        <div className="col-md-8 py-2">
                            <h5 className="card-title">{this.props.car.title}</h5>
                            <div>$ {this.props.car.price}</div>
                            <div>{this.props.car.description}</div>
                        </div>
                    </div>
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