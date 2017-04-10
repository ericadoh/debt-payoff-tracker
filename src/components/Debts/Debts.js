import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';

class Debts extends Component {
  render() {
    return (
    	<div style={styles.container}>
    		<Header />
    		<div style={styles.subContainer}>
	    		<Navbar />
	    		INSERT ADD DEBTS COMPONENT HERE
	    	</div>
    	</div>
      
    );
  }
}

export default Debts;
