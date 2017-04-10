import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';
import StratDiv from './strategyDiv.js'; 
const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: styles.mainFont,
    fontSize: 30,
    backgroundColor: styles.mainColor,
    color: 'white',
  },
  stratD: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px', 
  }
}; 
class Strategy extends Component {
  render() {
    return (
    	<div style={styles.container}>
	    	<Header />
	    	<div style={styles.subContainer}>
	    		<Navbar />
          <div style={style.stratD}>
          <StratDiv name={"Lowest Amount First"} />
          <StratDiv name={"Highest Interest First"} />
           <StratDiv name={"Order Entered in Table"} />    
           <StratDiv name={"Highest Amount First"} />
            <StratDiv name={"Lowest Balance First"} />
          </div> 
	    	</div>
    	</div>
      
    );
  }
}

export default Strategy;
