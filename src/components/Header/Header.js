import React, { Component } from 'react';
import styles from '../../styles/styles';

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: styles.mainFont,
    fontSize: 30,
    backgroundColor: styles.mainColor,
    color: 'white',
    padding: '15px 20px 15px 20px'
  }
};

class Header extends Component {
  render() {
    return (
    	<div style={style.header}>
    		Debt Payoff Tracker
    	</div>
    );
  }
}

export default Header;
