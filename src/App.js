import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './component/appBar';
import AddItem from './component/addItem';
import Total from './component/total';



function ItemsList(items, total) {
  const listItems = items.map((item, key) => <li key={key}>{item.itemToAdd}
    - {item.quantityToAdd} - {parseInt(item.quantityToAdd*100/total)} % </li>);
  return (
    <div>
      <ul>{listItems}</ul>
      <Total total={total}/>
    </div>
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.addItem = this
      .addItem
      .bind(this);
  }

  addItem(p) {
    this.setState({
      items: this
        .state
        .items
        .concat(p)
    });

    let total = 0.0;
    for (let i of this.state.items) {
      total += parseFloat(i.quantityToAdd);
    }
    total += parseFloat(p.quantityToAdd);
    this.setState({total: total});

  }

  render() {
    return (
      <div className="App">
        <SimpleAppBar/>
        <AddItem addItem={this.addItem}/> {ItemsList(this.state.items, this.state.total)}
      </div>
    );
  }
}

export default App;
