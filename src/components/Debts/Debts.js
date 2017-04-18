import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';
import DebtForm from './DebtForm.js'; 
import DebtListItem from './DebtListItem.js'; 

const style = {

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
  }

}

class Debts extends Component {

  renderDebts(){      
    return (
      <div>
      {this.props.debts.map(function(debt, i) {
        return <DebtListItem key={i} name={debt.name} minpay={debt.minimumPayment} interest={debt.interest}/>;
      })}
      </div>

        // <div> 
        //   <DebtListItem name={"Car"} minpay={"600"} interest={"8%"}/>
        //   <DebtListItem name={"School"} minpay={"510"} interest={"10%"}/>
        //   <DebtListItem name={"Other"} minpay={"780"} interest={"5%"} />
        // </div> 
      ); 
  }

  render() {
    console.log(this.props.debts);
    return (
    	<div style={sharedStyles.container}>
    		<Header />
    		<div style={sharedStyles.subContainer}>
	    		<Navbar />
          <div> 
	    		 <DebtForm/>
          </div>  
          <div> 
           <h1 style={style.header}>Current Debts</h1> 
            <ul>
            {this.renderDebts()}
           </ul>
	       </div> 
        </div> 
    </div>
    
    );
  }
}

export default Debts;
