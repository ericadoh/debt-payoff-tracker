import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';

const style = {
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    paddingRight: 20
  },
  link: {
    textDecoration: 'none',
    fontFamily: styles.mainFont,
    fontSize: 24,
    padding: '10px 0px 10px 0px'
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