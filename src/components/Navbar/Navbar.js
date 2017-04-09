import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
  navbar: {
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    color: 'red',
    fontSize: 20
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
      </div>
    );
  }
};

export default Navbar;