import React from 'react';
import './App.css';
//import Person from './components/person';
import MainComponent from './components/MainComponent';


//JSX
// Functional component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world!</h1>
//       <Person />
//     </div>
//   );
//   //return React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hello World!'), <Person />);
// }

// class component
// class App extends Component {

// }

//functional component

const App = () => {
  return <MainComponent />
}



export default App;
