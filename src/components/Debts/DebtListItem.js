import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';
import DebtForm from './DebtForm.js'; 
import ReactModal from 'react-modal';
import pencil from './pencil.png'; 
import deleteIcon from './delete.png';

const style = {

  debtListItem: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: 300,
    height: 170,
    margin: 10,
    //padding: '15px 20px 15px 20px',
    fontFamily: sharedStyles.mainFont,
    fontSize: 18,
    flex: '1 0 300px'
  },

  debtHeader: {
    backgroundColor: sharedStyles.lightMainColor,
    padding: '5px 20px 5px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  x: {
    marginBottom: 5,
    cursor: 'pointer'
  },

  edit: {
    cursor: 'pointer',
    margin: 5, 
    width: 25, 
    height: 25, 
    border: 'none',
    backgroundColor: sharedStyles.lightMainColor
  },

  debtInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 20px 5px 20px'
  },

  debtInfo: {
    fontSize: 24
  }, 
  
  debtName: {
    fontWeight: 700,
    fontSize: 24
  },

  button: {
    background: sharedStyles.mainColor, 
    color: 'white', 
    fontSize: 30, 
    margin: 10, 
    padding: '25px 10px', 
    border: '2 solid'+sharedStyles.mainColor, 
    borderRadius: 5, 
    backgroundImage: pencil
    
  }, 
  debtContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 0px 25px 0px', 
      backgroundColor: 'white',   
  }, 

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
      <div style={{...style.debtListItem, ...sharedStyles.shadow}} >
        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example" >
          <DebtForm name={this.props.name} balance={this.props.balance} minimumPayment={this.props.minimumPayment} interest={this.props.interest} addDebt={this.props.addDebt} onSubmit={this.handleCloseModal} />
        </ReactModal>

        <div style={style.debtHeader} >
          <label style={style.debtName}>
           {this.props.name}
          </label>
          <div style={style.icons}>
            <button style={style.edit} onClick={this.handleOpenModal} type="submit">
              <img src={pencil} alt="edit"/>
            </button>
            <button style={style.edit} onClick={this.deleteSelf} type="submit">
              <img src={deleteIcon} alt="delete"/>
            </button>
          </div>
        </div>

        <div style={style.debtInfoContainer}>
          <label style={style.debtInfo}>
            Balance: {this.props.balance}
          </label>
          <label style={style.debtInfo}>
            Min. monthly payment: {this.props.minimumPayment}
          </label>
          <label style={style.debtInfo}>
            Interest: {this.props.interest}
          </label>
        </div>

      </div>
    );
  }

}

export default DebtListItem; 