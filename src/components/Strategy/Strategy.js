import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import STRATEGY_TYPES from './StrategyTypes';
import sharedStyles from '../../styles/styles'; 
import { Link } from 'react-router-dom';
import {RadioGroup, RadioButton} from 'react-radio-buttons';

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    backgroundColor: sharedStyles.mainColor,
    color: 'white',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  stratD: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px', 
  }, 
  radioB: {
   
    fontFamily: sharedStyles.mainFont,
    fontSize: 20, 
    backgroundColor: sharedStyles.mainColor, 
    color: 'white', 
    fontWeight: 400, 

  },
  unSelect: {
   
    fontFamily: sharedStyles.mainFont,
    fontSize: 20, 
    backgroundColor: "grey", 
    color: 'black', 
    fontWeight: 100, 

  },
 

}; 

class Strategy extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedValue: this.props.strategy };
    this.setState = this.setState.bind(this);
  }

  handleSelection(newValue) {
    console.log("strategy: "+this.state.selectedValue + " --> "+newValue);
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
  }


  render() {
    console.log(this.state.selectedValue); 
    return (
      <div style={sharedStyles.container}>
        <Header />
        <div style={sharedStyles.subContainer}>
          <Navbar />
          <div style={style.stratD}>
          <label style={style.radioB}>
            <RadioGroup onChange={(value) => this.handleSelection(value)} horizontal value={"" + this.props.strategy}>
              <RadioButton style={style.radioB} value={"" + STRATEGY_TYPES.LOWEST_BALANCE_FIRST} >
                  Lowest Amount First
                </RadioButton>
                <RadioButton  style={style.radioB} value={"" + STRATEGY_TYPES.HIGHEST_INTEREST_FIRST} >
                  Highest Interest First
                </RadioButton>
                <RadioButton value={"" + STRATEGY_TYPES.ORDER_ENTERED } >
                  Order Entered in Table
                </RadioButton>

            </RadioGroup>
             </label> 
        
          </div> 
          <br/> <br/>
         <Link
            style={sharedStyles.nextButton}
            to="/contribution">
              Next Step
          </Link>
        </div>
         
      </div>
    );
  }
}

export default Strategy;