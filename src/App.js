import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CookedDishCounter from './pages/cookedDishCounter';



class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CookedDishCounter/>
      </div>
    );
  }
}

export default App;
