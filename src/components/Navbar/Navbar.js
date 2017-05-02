import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sharedStyles from '../../styles/styles';

const style = {
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    paddingRight: 20, 
  },
  link: {
    textDecoration: 'none',
    fontFamily: sharedStyles.mainFont,
    fontSize: 24,
    padding: '10px 0px 10px 0px',
    color: 'black'
  }, 
   line: {
    textDecoration: 'none',
    fontFamily: sharedStyles.mainFont,
    fontSize: 24,
    margin: '-10px -10px 10px -10px', 
    color: 'gray'
  }
};

class Navbar extends Component {
  render() {
    return (
      <div style={style.navbar}>
        <Link
          style={style.link}
          to="/table">
            Table
        </Link>
        <Link
          style={style.link}
          to="/graph">
            Graph
        </Link>
        <div style={style.line}> 
          ______________
        </div> 
        <Link
          style={style.link}
          to="/debts">
            Edit Debts
        </Link>
        <Link
          style={style.link}
          to="/contribution">
            Edit Contribution
        </Link>
        <Link
          style={style.link}
          to="/strategy">
            Edit Strategy
        </Link>
      </div>
    );
  }
};

export default Navbar;