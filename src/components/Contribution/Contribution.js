import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';
import ContributionForm from './ContributionForm.js'

class Contribution extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div style={sharedStyles.container}>
    		<Header />
    		<div style={sharedStyles.subContainer}>
	    		<Navbar />
	    		<ContributionForm 
            debts={this.props.debts} 
            monthly={this.props.monthly} 
            setMonthly={this.props.setMonthly} /> 
	    	</div>
    	</div>
    );
  }
}

export default Contribution;
