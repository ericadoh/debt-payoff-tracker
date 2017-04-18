import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    backgroundColor: sharedStyles.mainColor,
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
