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
    console.log(this.props);
    this.state = { selectedValue: this.props.strategy };
    this.setState = this.setState.bind(this);
  }

  handleSelection(newValue) {
    console.log("strategy: "+this.state.selectedValue + " --> "+newValue);
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
    
  }

  render() {

    if (this.props.showNav) {
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
                <RadioButton value="Order Entered in Table">
                  Order Entered in Table
                </RadioButton>
                <RadioButton value="Highest Amount First">
                  Highest Amount First
                </RadioButton>
                <RadioButton value="Lowest Balance First">
                  Lowest Balance First
                </RadioButton>

            </RadioGroup>
             </label> 
          

            {/*
            // <div style={style.row}>
            //   <StratDiv name={"Lowest Amount First"} />
            //   <StratDiv name={"Highest Interest First"} />
            //   <StratDiv name={"Order Entered in Table"} />    
            // </div>
            // <div style={style.row}>
            //   <StratDiv name={"Highest Amount First"} />
            //   <StratDiv name={"Lowest Balance First"} />
            // </div> */}
          </div> 
          <br/> <br/>
         <Link
            style={sharedStyles.nextButton}
            to="/graph" >
              Next Step
          </Link>
        </div>
         
      </div>
    );
    } else {
      return (
      <div style={sharedStyles.container}>
        <Header />
        <div style={sharedStyles.subContainer}>
          <div style={style.stratD}>
          <label style={style.radioB}>
            <RadioGroup onChange={(value) => this.handleSelection(value)} horizontal value={"" + this.props.strategy}>
              <RadioButton style={style.radioB} value={"" + STRATEGY_TYPES.LOWEST_BALANCE_FIRST} >
                  Lowest Amount First
                </RadioButton>
                <RadioButton  style={style.radioB} value={"" + STRATEGY_TYPES.HIGHEST_INTEREST_FIRST} >
                  Highest Interest First
                </RadioButton>
                <RadioButton value="Order Entered in Table">
                  Order Entered in Table
                </RadioButton>
                <RadioButton value="Highest Amount First">
                  Highest Amount First
                </RadioButton>
                <RadioButton value="Lowest Balance First">
                  Lowest Balance First
                </RadioButton>

            </RadioGroup>
             </label> 
          

            {/*
            // <div style={style.row}>
            //   <StratDiv name={"Lowest Amount First"} />
            //   <StratDiv name={"Highest Interest First"} />
            //   <StratDiv name={"Order Entered in Table"} />    
            // </div>
            // <div style={style.row}>
            //   <StratDiv name={"Highest Amount First"} />
            //   <StratDiv name={"Lowest Balance First"} />
            // </div> */}
          </div> 
          <br/> <br/>
         <Link
            style={sharedStyles.nextButton}
            to="/graph" >
              Next Step
          </Link>
        </div>
         
      </div>
    );
    }
    
  }
}

export default Strategy;