import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';

const style = {

  debtListItem: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: 300,
    height: 150,
    margin: 10,
    border: '1px solid black',
    padding: '15px 20px 15px 20px',
    fontFamily: sharedStyles.mainFont,
    fontSize: 18,
    flex: '1 0 300px'
  },

  x: {
    float: 'right',
    marginBottom: 5,
    cursor: 'pointer'
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
  }, 
  debtContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 0px 25px 0px', 
      backgroundColor: 'white',   
  }

};


class DebtListItem extends Component {

  deleteSelf = () => {
    const { deleteDebt } = this.props;
    deleteDebt({...this.props});
  }
  editSelf = () => {
    alert("Edit!") 
    //maybe? 
    //delete self, 
    //display new debt creator with prefilled info
    //save new debt
  }

  render() {
    return (
      <div style={style.debtListItem} >
        <label style={style.debtName}>
         {this.props.name}
         <span style={style.x} onClick={this.deleteSelf}>x</span>
        </label>
        <label>
          Min. monthly payment: {this.props.minimumPayment}
        </label>
        <label>
          Interest: {this.props.interest}
        </label>
        <label>
          <span style={style.x} onClick={this.editSelf}>Edit?</span>
          </label> 
      </div>
    );
  }

}

export default DebtListItem; 