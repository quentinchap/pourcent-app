import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import DishCounter from '../services/dishCounter';
import uuid from 'uuid/v4';

const styles = theme => ({
  button: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    minWidth: 40,
    width: 40,
    minHeight: 40,
    height: 40
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    flex: 1,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  textField1: {
    flex: 1,
    marginLeft: 20,
    marginRight: theme.spacing.unit
  },
  menu: {
    width: 200
  },
  addItem: {
    display: 'flex',
    background: '#ececec',
    padding: 10,
    height: 100
  }
});

export default withStyles(styles)(class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      itemToAdd: '',
      quantityToAdd: ''
    };

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
    let id = uuid();

    this.setState({
      id: id
    }, function () {
      let data = Object.assign({}, this.state);

      DishCounter.updateRecord(this.state);
      this.setState({itemToAdd: '', quantityToAdd: ''});

      this
        .props
        .addItem(data);
    });

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
    let ingredientInput = null;

    return (

      <div className={classes.addItem}>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.handleClick}>
          <TextField
            id="name"
            label="Food name"
            name="itemToAdd"
            className={classes.textField1}
            value={this.state.itemToAdd}
            onChange={this.handleInputChange}
            margin="normal"/>
          <TextField
            id="value"
            label="Quantity"
            type="number"
            name="quantityToAdd"
            value={this.state.quantityToAdd}
            onChange={this.handleInputChange}
            className={classes.textField}
            InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>
          }}
            margin="normal"/>
          <Button
            variant="fab"
            type="submit"
            color="primary"
            aria-label="add"
            className={classes.button}
            size="small">
            <AddIcon/>
          </Button>
        </form>
      </div>
    );
  }
})