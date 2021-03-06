import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';
import RadioButtonGroup from 'react-radio-button';


const style = {
  label: {
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    backgroundColor: sharedStyles.mainColor,
    color: 'white',
  },
  debtContainer: {
      display: 'flex',
      flexDirection: 'column', 
      padding: '20px',
      margin: '10px',
      backgroundColor: sharedStyles.mainColor, 
      width: '200px', 
      height: '100px',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    },

};

class StratDiv extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
      <div>
        <button style={sharedStyles.button}>
          {this.props.name}
        </button>
    </div>
    );
  }

}

export default StratDiv; 