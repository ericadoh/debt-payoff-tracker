import React, { Component } from 'react';
import sharedStyles from '../../styles/styles.js';

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    padding: '15px 20px 15px 20px'
  },
  button: {
    background: sharedStyles.mainColor, 
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
    this.state = {
      name: this.props.name ? this.props.name : '',
      balance: this.props.balance ? this.props.balance : '',
      minimumPayment: this.props.minimumPayment ? this.props.minimumPayment : '',
      interest: this.props.interest ? this.props.interest : '', 
      id: this.handleCreateID()
    };
    this.handleCreateID = this.handleCreateID.bind(this); 
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeBalance = this.handleChangeBalance.bind(this);
    this.handleChangeMinPay = this.handleChangeMinPay.bind(this);
    this.handleChangeInterest = this.handleChangeInterest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //createID for debt 
  handleCreateID(){
    return Math.floor(Math.random() * 80000000); 
  }


  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
   handleChangeBalance(event) {
      this.setState({balance: event.target.value});
  }

  handleChangeMinPay(event) {
      this.setState({minimumPayment: event.target.value});
  }

  handleChangeInterest(event) {
      this.setState({interest: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleCreateID(); 
    const { addDebt, onSubmit } = this.props;
    addDebt({...this.state});
    onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={style.header}>
          Debt Name:
          <input type="text" style={sharedStyles.input} value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label style={style.header}>
          Balance:
          <input type="text" style={sharedStyles.input} value={this.state.balance} onChange={this.handleChangeBalance} />
        </label>
          <label style={style.header}>
          Minimum Monthly Payment:
          <input type="number" style={sharedStyles.input} value={this.state.minimumPayment} onChange={this.handleChangeMinPay} />
        </label>
          <label style={style.header}>
          Interest:
          <input type="number" style={sharedStyles.input} value={this.state.interest} onChange={this.handleChangeInterest} />
        </label>
        <input style={sharedStyles.button} type="submit" value="Submit" />
      </form>
    );
  }
}
export default DebtForm; 