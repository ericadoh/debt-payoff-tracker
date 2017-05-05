import React, { Component } from 'react';
import sharedStyles from '../../styles/styles.js';

const style = {

  header: {
    backgroundColor: sharedStyles.lightMainColor,
    padding: '15px 20px 15px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    fontWeight: 700,
    marginBottom: '15px'
  },

  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: sharedStyles.mainFont,
    fontSize: 24,
    padding: '10px 20px 10px 20px',
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
  }, 
  x: {
    float: 'left',
    color: "black", 
    fontFamily: sharedStyles.mainFont, 
    background: "white", 
    marginBottom: 5,
    cursor: 'pointer'
  },
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
    
    if(event.target.value === "close"){
      //do nothing
     const{ onSubmit } = this.props;
      onSubmit(); 
    }
    else{
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
      if(sub === true){
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
  }
  closeSelf = () => {
     const{ addDebt, onSubmit } = this.props;
      onSubmit(); 

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div style={style.header}>
          <span>Add/change debt information</span>
          <button style={style.x} onClick= {this.closeSelf}>
                 x
          </button>
        </div>
          
        <label style={style.item}>
          <span>Debt Name:</span>
          <input type="text" style={sharedStyles.input} value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label style={style.item}>
          <span>Balance:</span>
          <input type="text" style={sharedStyles.input} value={this.state.balance} onChange={this.handleChangeBalance} />
        </label>
        <label style={style.item}>
          <span>Minimum Monthly Payment:</span>
          <input type="number" style={sharedStyles.input} value={this.state.minimumPayment} onChange={this.handleChangeMinPay} />
        </label>
        <label style={style.item}>
          <span>Interest:</span>
          <input type="number" style={sharedStyles.input} value={this.state.interest} onChange={this.handleChangeInterest} />
        </label>
        <label style={style.example}>
          Ex: A 20% interest rate would be written as 20.
          </label>  
        <input style={sharedStyles.button} type="submit" value="Submit" />
      </form>
    );
  }
}
export default DebtForm; 