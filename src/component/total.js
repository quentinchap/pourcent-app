import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({});

export default withStyles(styles)(class Total extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {classes} = this.props;

    return (

      <div className={classes.addItem}>
       Total: {this.props.total}
      </div>
    );
  }
})