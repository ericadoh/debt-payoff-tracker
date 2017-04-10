import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';

class Graph extends Component {
  render() {
    return (
    	<div style={styles.container}>
    		<Header />
    		<div style={styles.subContainer}>
	    		<Navbar />
	    		<div>GRAPH COMPONENT</div>
	    	</div>
    	</div>
      
    );
  }
}

export default Graph;
