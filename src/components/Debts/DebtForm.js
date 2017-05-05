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

  }, 
  example: {
    color: "lightgrey", 
    fontsize: 12
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
      this.setState({ balance: parseFloat(event.target.value) });
  }

  handleChangeMinPay(event) {
      this.setState({minimumPayment: parseFloat(event.target.value) });
  }

  handleChangeInterest(event) {
      this.setState({interest: parseFloat(event.target.value) });
  }

  handleSubmit(event) {
    event.preventDefault();
    var sub = true; 
    if(this.state.name === '' || this.state.balance === '' || this.state.minimumPayment === '' || this.state.interest === ''){
      alert("ERROR: You have left field/s blank. Please fill in all fields."); 
      sub = false; 
    }
    if(parseInt(this.state.balance, 10) < parseInt(this.state.minimumPayment, 10)){
      alert("ERROR: Your minimum monthly payment is greater than the balance of the debt.")
      sub = false; 
    }
    if(parseInt(this.state.balance, 10) < 0 ){
      alert("ERROR: Your balance is negative, which is not allowed."); 
      sub = false; 
    }
    if(parseInt(this.state.minimumPayment, 10) < 0){
      alert("ERROR: Your minimum monthly payment is negative, which is not allowed."); 
      sub = false; 
    }
    if(parseInt(this.state.interest, 10) < 0){
      alert("ERROR: Your interest is negative, which is not allowed."); 
      sub = false; 
    }
    if(sub == true){
      event.preventDefault();
      this.handleCreateID(); 
      const { addDebt, onSubmit } = this.props;
      this.setState({
        dateEntered: new Date()
      });
      addDebt({...this.state});
      onSubmit();
    }
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
          <label style={style.example}>
          Ex: A 20% interest rate would be written as 20.
          </label>  
        </label>
        <input style={sharedStyles.button} type="submit" value="Submit" />
      </form>
    );
  }
}
export default DebtForm; 