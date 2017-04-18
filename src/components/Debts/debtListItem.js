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
    padding: '15px 20px 0px 20px'
  },
  header2: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: styles.mainFont,
    fontSize: 12,
    backgroundColor: styles.mainColor,
    color: 'lightgrey',
    padding: '15px 20px 5px 20px'
  },
  button: {
    background: styles.mainColor, 
    color: 'white', 
    fontSize: 30, 
    margin: 10, 
    padding: '25px 10px', 
    border: '2 solid'+styles.mainColor, 
    borderRadius: 5
  }, 
  debtContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 0px 25px 0px', 
      backgroundColor: 'white', 
     
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