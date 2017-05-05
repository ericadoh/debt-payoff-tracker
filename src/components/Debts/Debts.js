import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';
import DebtForm from './DebtForm.js'; 
import DebtListItem from './DebtListItem.js'; 
import { Link } from 'react-router-dom';
const style = {

  debts: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  addDebtItem: {
    boxSizing: 'border-box',
    width: 300,
    height: 170,
    margin: 10,
    padding: '15px 20px 15px 20px',
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    flex: '1 0 300px', 
    backgroundColor: sharedStyles.mainColor, 
    color: 'white', 
    fontWeight: 700,
    outline: 'none',
    border: 'none'
  },

  debtListContainer: {
      marginLeft:  '10px',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    padding: '15px 20px 15px 20px', 
    marginLeft: 40, 
    marginTop: 0, 
    textAlign: 'center'
  },

  fullC: {
    backgroundColor: sharedStyles.mainColor,
     display: 'flex',
      flexDirection: 'row',
      marginLeft:  '10px',
  }, 

}

class Debts extends Component {

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
  }

  renderDebts = () => {     

    const renderDebtListItem = (debt, i, deleteDebt) => {
      return (
        <DebtListItem
          addDebt={this.props.addDebt}
          key={i}
          name={debt.name}
          id={debt.id} 
          balance={debt.balance}
          minimumPayment={debt.minimumPayment}
          interest={debt.interest}
          deleteDebt={this.props.deleteDebt}/>
      );
    };

    return (
      <div style={style.debts}>
        <button style={{...style.addDebtItem, ...sharedStyles.shadow}} onClick={this.handleOpenModal}>{'+ Add new debt'}</button>
        {this.props.debts.map(renderDebtListItem)}
      </div>
      ); 

  }

  render() {

    console.log(this.props.debts);

    return (
    	<div style={sharedStyles.container}>
        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example" >
          <DebtForm addDebt={this.props.addDebt} onSubmit={this.handleCloseModal} />
        </ReactModal>
    		<Header />
    		<div style={sharedStyles.subContainer}>
	    		<Navbar />
          {this.renderDebts()}
        <Link
          style={sharedStyles.nextButton}
          to="/contribution">
            Next Step
        </Link>
        </div> 
      </div>
    );
  }
}

export default Debts;
