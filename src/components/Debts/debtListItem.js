import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    backgroundColor: sharedStyles.mainColor,
    color: 'white',
    padding: '15px 20px 0px 20px'
  },
  header2: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: sharedStyles.mainFont,
    fontSize: 12,
    backgroundColor: sharedStyles.mainColor,
    color: 'lightgrey',
    padding: '15px 20px 5px 20px'
  },
  button: {
    background: sharedStyles.mainColor, 
    color: 'white', 
    fontSize: 30, 
    margin: 10, 
    padding: '25px 10px', 
    border: '2 solid'+sharedStyles.mainColor, 
    borderRadius: 5
  }, 
  debtContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 0px 25px 0px', 
      backgroundColor: 'white', 
      borderRadius: 10,  
      borderWidth: 5, 
      borderColor: 'green', 
    }
};

class DebtLI extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    return (
      <div style={style.debtContainer}>
        <label style={style.header}>
         Debt Name: {this.props.name}
        </label>
         <label style={style.header2}>
          Minimum Monthly Payment: {this.props.minpay}
        </label>
          <label style={style.header2}>
          Interest: {this.props.interest}
        </label>
      </div>

       /* <label style = {style.header}>
          Minimum Monthly Payment:
        </label>
          <label style = {style.header}>
          Interest:
       
        </label>*/
    );
  }
}
export default DebtLI; 