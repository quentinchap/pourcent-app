import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  button: {
    color: 'white'
  }
};

export default withStyles(styles)(class SimpleAppBar extends Component {

  constructor(props) {
    super(props);
    this.clearData = this
    .clearData
    .bind(this);
  }

  clearData(){
    console.log('clear');
    this.props.clearData();
  }

  render()
  {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Calory counter
            </Typography>
            <div>
              <Button className={classes.button} aria-label="Delete" onClick={this.clearData}>
                <DeleteIcon/>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
})