import React, { Component } from 'react';
import { connect } from 'react-redux';

// export default function CarDetails(props) {
//     return (
//         <div>
//             <div>TUT</div>
//             <h1>{props.match.params.name}</h1>
//         </div>
//     );
// }

const CarDetails = (props) => {
    console.log(props.match.params);
    return (
        <div>
            Cars Details
        </div>
    )

    // const player = PlayerAPI.get(
    //     parseInt(props.match.params.number, 10)
    // );
    // if (!player) {
    //     return <div>Sorry, but the player was not found</div>
    // }
    // return (
    //     <div>
    //         <h1>{player.name} (#{player.number})</h1>
    //         <h2>Position: {player.position}</h2>
    //         <Link to='/roster'>Back</Link>
    //     </div>
    // )
};

export default CarDetails;



// class CarDetails extends Component {
//     render() {
//         console.log(this.state);
//         return (
//             <div>
//                 Cars Details
//             </div>
//         );
//     }
// }
//
// function mapStateToProps(state) {
//     return {
//         user: 'gghgfhg'
//     }
// }
//
// export default connect(mapStateToProps)(CarDetails)