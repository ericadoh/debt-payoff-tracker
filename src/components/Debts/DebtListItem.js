import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';
import DebtForm from './DebtForm.js'; 
import ReactModal from 'react-modal';
const style = {

  debtListItem: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: 300,
    height: 170,
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
   edit: {
    float: 'right',
    marginBottom: 5,
    cursor: 'pointer', 
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
constructor () {
    super();
    this.state = { showModal: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
   
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    this.deleteSelf(); 
  }
  deleteSelf = () => {
    const { deleteDebt } = this.props;
    deleteDebt({...this.props});
  }


  render() {
    return (
      <div style={style.debtListItem} >
        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example" >
          <DebtForm name={this.props.name} balance={this.props.balance} minimumPayment={this.props.minimumPayment} interest={this.props.interest} addDebt={this.props.addDebt} onSubmit={this.handleCloseModal} />
        </ReactModal>
        <label style={style.debtName}>
         {this.props.name}
         <button style={style.edit} onClick={this.handleOpenModal} type="submit">
            <img src="../../../editImg.png" width="40" height="40" alt="edit"/>
         </button>
         <span style={style.x} onClick={this.deleteSelf}>x</span>
        </label>
        <label>
          Balance: {this.props.balance}
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