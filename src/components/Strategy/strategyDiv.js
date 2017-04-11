import React, { Component } from 'react';
import defaultStyles from '../../styles/styles';

const style = {
  label: {
    fontFamily: defaultStyles.mainFont,
    fontSize: 30,
    backgroundColor: defaultStyles.mainColor,
    color: 'white',
  },
  debtContainer: {
      display: 'flex',
      flexDirection: 'column', 
      padding: '20px',
      margin: '10px',
      backgroundColor: defaultStyles.mainColor, 
      width: '200px', 
      height: '100px',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
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
        <label style={style.label}>
          {this.props.name}
        </label>
      </div> 
    );
  }

}

export default StratDiv; 