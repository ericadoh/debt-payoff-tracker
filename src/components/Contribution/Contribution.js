import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';
import ContributionForm from './ContributionForm.js'

class Contribution extends Component {

  render() {
    console.log(this.props);

    // include Navbar
    if (this.props.showNav) {
        // if user has input all fields, include Navbar
        return (
            <div style={sharedStyles.container}>
                <Header />
                <div style={sharedStyles.subContainer}>
                    <Navbar />
                    <ContributionForm 
                        debts={this.props.debts} 
                        monthly={this.props.monthly} 
                        setMonthly={this.props.setMonthly}
                        showNav={this.props.showNav} /> 
                </div>
            </div>
        );
    } else {
        return (
            <div style={sharedStyles.container}>
                <Header />
                <div style={sharedStyles.subContainer}>
                    <ContributionForm 
                        debts={this.props.debts} 
                        monthly={this.props.monthly} 
                        setMonthly={this.props.setMonthly}
                        showNav={this.props.showNav} /> 
                </div>
            </div>
        );
    }
 
  }
}

export default Contribution;
