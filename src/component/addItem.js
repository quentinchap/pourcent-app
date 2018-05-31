import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles'

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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  textField1: {
    marginLeft: 20,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  addItem: {
    display: 'flex',
    background: '#ececec',
    padding: 10,
    paddingBottom: 30
  }
});

export default withStyles(styles)(class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  handleClick() {
    this
      .props
      .addItem(this.state);
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

      <div className={classes.addItem}>

        <TextField
          id="name"
          label="Name"
          name="itemToAdd"
          className={classes.textField1}
          onChange={this.handleInputChange}
          margin="normal"/>
        <TextField
          id="value"
          label="value"
          type="number"
          name="quantityToAdd"
          onChange={this.handleInputChange}
          className={classes.textField}
          margin="normal"/>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}
          size="small"
          onClick={this.handleClick}>
          <AddIcon/>
        </Button>
      </div>
    );
  }
})