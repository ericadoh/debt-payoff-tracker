import React, { Component } from 'react';
import styles from '../../styles/styles';

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: styles.mainFont,
    fontSize: 30,
    backgroundColor: styles.mainColor,
    color: 'white',
    padding: '15px 20px 15px 20px'
  },
  button: {
    background: styles.mainColor, 
    color: 'white', 
    fontSize: 30, 
    margin: 10, 
    padding: '25px 10px', 
    border: '2 solid'+styles.mainColor, 
    borderRadius: 5
  }
};


class DebtForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A debt was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style = {style.header}>
          Debt Name:
          <input type="text" style={styles.subContainer} value={this.state.value} onChange={this.handleChange} />
        </label>
          <label style = {style.header}>
          Minimum Monthly Payment:
          <input type="text" style={styles.subContainer} value={this.state.value} onChange={this.handleChange} />
        </label>
          <label style = {style.header}>
          Interest:
          <input type="text" style={styles.subContainer} value={this.state.value} onChange={this.handleChange} />
        </label>
        <input style = {style.button} type="submit" value="Submit" />
      </form>
    );
  }
}
export default DebtForm; 