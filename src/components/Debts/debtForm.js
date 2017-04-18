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
    border: '1px solid green'
  }
};


class DebtForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
     minpay: '',
    interest: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMinPay = this.handleChangeMinPay.bind(this);
    this.handleChangeInterest = this.handleChangeInterest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeMinPay(event) {
    this.setState({minpay: event.target.value});
  }
  handleChangeInterest(event) {
    this.setState({interest: event.target.value});
  }

  handleSubmit(event) {
    alert('A debt was submitted: ' + this.state.name +" "+this.state.minpay+" "+this.state.interest);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style = {style.header}>
          Debt Name:
          <input type="text" style={styles.subContainer} value={this.state.name} onChange={this.handleChangeName} />
        </label>
          <label style = {style.header}>
          Minimum Monthly Payment:
          <input type="text" style={styles.subContainer} value={this.state.minpay} onChange={this.handleChangeMinPay} />
        </label>
          <label style = {style.header}>
          Interest:
          <input type="text" style={styles.subContainer} value={this.state.interest} onChange={this.handleChangeInterest} />
        </label>
        <input style = {style.button} type="submit" value="Submit" />
      </form>
    );
  }
}
export default DebtForm; 