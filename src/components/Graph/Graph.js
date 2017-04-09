import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';

class Graph extends Component {
  render() {
    return (
    	<div style={styles.container}>
    		<Navbar />
    		<div>GRAPH COMPONENT</div>
    	</div>
      
    );
  }
}

export default Graph;
