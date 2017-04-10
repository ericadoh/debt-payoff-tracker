import React, { Component } from 'react';
import styles from '../../styles/styles';

const style = {
  header: {
    fontFamily: styles.mainFont,
    fontSize: 30,
    backgroundColor: styles.mainColor,
    color: 'white',
  },
  debtContainer: {
      display: 'flex',
      flexDirection: 'column', 
      padding: '10px 10px 25px 10px', 
      margin: '10px',
      backgroundColor: styles.mainColor, 
      border: '1px solid green', 
      width: '200px', 
      height: '100px'
    }
};

class StratDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    return (
      <div style={style.debtContainer}>
        <label style={style.header}>
          {this.props.name}
        </label>
      </div> 
    );
  }
}
export default StratDiv; 