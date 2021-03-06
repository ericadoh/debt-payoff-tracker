import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';
import DebtFormWithRank from './DebtFormWithRank.js'; 
import ReactModal from 'react-modal';
import pencil from './pencil.png'; 
import deleteIcon from './delete.png';

const style = {

  debtListItem: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: 300,
    height: 200,
    margin: 10,
    fontFamily: sharedStyles.mainFont,
    fontSize: 18,
    flex: '1 0 300px',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: "3px solid " + sharedStyles.lightMainColor, 
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
    fontSize: 20
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
      <div
        className={'grow'}
        style={style.debtListItem} >
        <ReactModal 
          style={sharedStyles.modal}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example" >
          //EDIT THIS TO BE DEBTFORM WITH RANK INPUT 
          <DebtFormWithRank name={this.props.name} balance={this.props.balance} minimumPayment={this.props.minimumPayment} interest={this.props.interest} rank={this.props.rank} addDebt={this.props.addDebt} onSubmit={this.handleCloseModal} />
        </ReactModal>

        <div style={style.debtHeader} >
          <label style={style.debtName}>
           {this.props.name}
          </label>
          <div style={style.icons}>
            <button className={'fade'} style={style.edit} onClick={this.handleOpenModal} type="submit">
              <img src={pencil} alt="edit"/>
            </button>
            <button className={'fade'} style={style.edit} onClick={this.deleteSelf} type="submit">
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
            Interest: {(this.props.interest * 100) + '%'}
          </label>
           <label style={style.debtInfo}>
            Rank: {this.props.rank}
          </label>
        </div>

      </div>
    );
  }

}

export default DebtListItem; 