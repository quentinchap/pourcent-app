import React, {Component} from 'react';
import SimpleAppBar from '../../component/appBar';
import AddItem from '../../component/addItem';
import BottomBar from '../../component/bottomBar';
import ItemLine from '../../component/itemLine';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  listItem: {
    height: 'calc(100vh - 276px)',
    overflow: 'scroll'
  }
});

export default withStyles(styles)(class CookedDishCounter extends Component {

  ItemsList(items, total) {
    const listItems = items.map((item, key) => <ItemLine item={item} key={key} total={total}/>);
    return (listItems);
  }

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

    this.estimate = this
      .estimate
      .bind(this);
  }

  estimate(poids)
  {
    console.log('estimate', poids);
    let items =  this.state.items;
    for (let i of items) {
      i.estimation = Math.round(parseFloat(i.quantityToAdd / this.state.total * poids));
    }
    this.setState({items: items});
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

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this
      .el
      .scrollIntoView({behavior: 'smooth'});
  }

  render() {
    const {classes} = this.props;
    return (
      <div className="App">
        <SimpleAppBar/>
        <AddItem addItem={this.addItem}/>
        <div
          ref={el => {
          this.el = el;
        }}
          className={classes.listItem}>{this.ItemsList(this.state.items, this.state.total)}</div>
        <BottomBar
          className={classes.bottomBar}
          estimate={this.estimate}
          total={this.state.total}/>
      </div>
    );
  }
});
