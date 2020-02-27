import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Clock from './clock.js'
import Event from './button.js'
import Ninjas from './ninja.js'

class App extends React.Component{
  state = {
    ninjas: [
      {name: 'NG', age: '22', belt: 'black', id: 1},
      {name: 'Esther', age: '20', belt: 'blue', id: 2},
      {name: 'Catherine', age: '21', belt: 'green', id: 3}
    ]
  }
  render(){
    return(
      <div className="App">
      <h1>My First React App</h1>
        <p>Welcome :)</p>
        <p>My name is Esther {this.props.name}, je suis une {this.props.gender}</p>
        <Clock/>
        <Event/>
        <Ninjas ninjas = {this.state.ninjas}/>
    </div>
    )
  }
}




export default App;

