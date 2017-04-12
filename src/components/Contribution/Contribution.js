import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';
import ContributionForm from './contributionForm.js'

class Contribution extends Component {
  render() {
    return (
    	<div style={sharedStyles.container}>
    		<Header />
    		<div style={sharedStyles.subContainer}>
	    		<Navbar />
	    		<ContributionForm /> 
	    	</div>
    	</div>
    );
  }
}

export default Contribution;
