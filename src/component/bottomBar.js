import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    background: '#d8d8d8',
    minHeight: '55px',
    lineHeight: '55px',
    height: 100
  },
  rightIcon: {
    marginLeft: 10
  },
  container: {
    marginBottom: 16
  },
  textField: {
    marginRight: 10
  }
});

export default withStyles(styles)(class BottomBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantityToEat: ''
    }

    this.handleInputChange = this
      .handleInputChange
      .bind(this);
    this.handleClick = this
      .handleClick
      .bind(this);
  }

  handleClick(event) {
    
    event.preventDefault();
    event.stopPropagation();

    this
      .props
      .estimate(this.state.quantityToEat);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.bottomBar}>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.handleClick}>
          <TextField
            label="Quantity to eat"
            type="number"
            name="quantityToEat"
            value={this.state.quantityToEat}
            onChange={this.handleInputChange}
            className={classes.textField}
            InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>
          }}
            margin="normal"/>
          <Button type="submit" className={classes.button} variant="raised" color="primary" >
            Estimate
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
        </form>
      </div>
    );
  }
})