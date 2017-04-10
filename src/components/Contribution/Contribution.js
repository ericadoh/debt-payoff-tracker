import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';

class Contribution extends Component {
  render() {
    return (
    	<div style={styles.container}>
    		<Header />
    		<div style={styles.subContainer}>
	    		<Navbar />
	    		INSERT EDIT CONTRIBUTION COMPONENT HERE
	    	</div>
    	</div>
      
    );
  }
}

export default Contribution;
