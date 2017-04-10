import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';
import ContributionForm from './contributionForm.js'

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: styles.mainFont,
    fontSize: 30,
    backgroundColor: styles.mainColor,
    color: 'white',
    padding: '120px 180px 120px 180px'
  },
}; 
class Contribution extends Component {
  render() {
    return (
    	<div style={styles.container}>
    		<Header />
    		<div style={styles.subContainer}>
	    		<Navbar />
	    		<ContributionForm /> 
	    	</div>
    	</div>
      
    );
  }
}

export default Contribution;
