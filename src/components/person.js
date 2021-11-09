import React, { Component } from "react";

//functional component

// function Person() {
//     return (
//         <div className="App">
//             <h1>I am person component!</h1>
//         </div>
//     );
//     //return React.createElement('div', null, React.createElement('h1', null, "I am person component!"));
// }

//dynamic arrow functional component

let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h4>Extra Info: {props.children}</h4>
        </div>
    );
}

// dynamic class component

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         //console.log(this.props);
//         return (
//             <div>
//                 <h3>Name: {this.props.name}</h3>
//                 <h4>Extra Info: {this.props.children}</h4>
//             </div>
//         );
//     }
// }

export default Person;