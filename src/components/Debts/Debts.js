import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';
import DebtForm from './debtForm.js'; 
import DebtLI from './debtListItem.js'; 
const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: styles.mainFont,
    fontSize: 30,
    backgroundColor: styles.mainColor,
    color: 'white',
    padding: '15px 20px 15px 20px', 
    marginLeft: 40, 
    marginTop: 0, 
    textAlign: 'center'
  },
  fullC: {
    backgroundColor: styles.mainColor,
     display: 'flex',
      flexDirection: 'row',
      marginLeft:  '10px',
  },
  debtListContainer: {
     // backgroundColor: 'white',
    //  display: 'flex',
     // flexDirection: 'row',
      marginLeft:  '10px',
 
  }
}
class Debts extends Component {



  renderDebts(){      
    return (
        <div> 
           <DebtLI name = "Car" minpay="600" interest="8%"/>
            <DebtLI name = "School" minpay="510" interest="10%"/>
            <DebtLI name = "Other" minpay="780" interest="5%" />
        </div> 
        
        
      
      ); 
  }

  render() {
    return (
    	<div style={styles.container}>
    		<Header />
    		<div style={styles.subContainer}>
	    		<Navbar />
          <div> 
	    		 <DebtForm/>
          </div> 
          
          <div> 
           <h1 style = {style.header}>  Current Debts </h1> 
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
