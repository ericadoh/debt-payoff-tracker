import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';

const style = {

  debtListItem: {
    margin: 10,
    border: '1px solid black',
    padding: '15px 20px 15px 20px',
    fontFamily: sharedStyles.mainFont,
    fontSize: 18,
    display: 'flex',
    flexDirection: 'column'
  },

  debtName: {
    borderBottom: '2px solid black',
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 10
  },
  
  button: {
    background: sharedStyles.mainColor, 
    color: 'white', 
    fontSize: 30, 
    margin: 10, 
    padding: '25px 10px', 
    border: '2 solid'+sharedStyles.mainColor, 
    borderRadius: 5
  }

};

class DebtListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    return (
      <div style={style.debtListItem} >
        <label style={style.debtName}>
         {this.props.name}
        </label>
        <label>
          Min. monthly payment: {this.props.minimumPayment}
        </label>
        <label>
          Interest: {this.props.interest}
        </label>
      </div>
    );
  }
}

export default DebtListItem; 