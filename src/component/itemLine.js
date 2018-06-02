import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  line: {
    display: 'flex',
    height: 40,
    lineHeight: '40px'
  },
  itemProperties: {
    flex: 1
  }
});

export default withStyles(styles)(class Total extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {classes} = this.props;

    return (

      <div key={this.props.key} className={classes.line}>
        <div className={classes.itemProperties}>{this.props.item.itemToAdd}</div>
        <div className={classes.itemProperties}>{this.props.item.quantityToAdd} g</div>
        <div className={classes.itemProperties}>{Math.round(parseFloat(this.props.item.quantityToAdd * 100 / this.props.total))} %
        </div>
        <div className={classes.itemProperties}>
          {this.props.item.estimation} g
        </div>
      </div>
    );
  }
})