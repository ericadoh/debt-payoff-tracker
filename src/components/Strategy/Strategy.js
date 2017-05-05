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
     boxSizing: 'border-box', 
    display: 'flex',
    flexDirection: 'row',
    margin: '10px', 
  }, 
  radioB: {  
    fontFamily: sharedStyles.mainFont,
    fontSize: 40, 
    backgroundColor: sharedStyles.mainColor, 
    color: 'white', 
    fontWeight: 400, 
    width: "250", 
    height: "150", 
    textAlign: "center",
    padding: "20", 
    margin: "7", 
    borderRadius: "10", 
    borderColor: sharedStyles.mainColor, 
    borderWidth: "1", 
    border: "solid"

  },
  grey: {
    fontFamily: sharedStyles.mainFont,
    fontSize: 40, 
    backgroundColor: "white", 
    color: 'grey', 
    fontWeight: 200, 
      width: "250", 
    height: "150", 
    textAlign: "center",
    padding: "20", 
    margin: "7", 
    borderRadius: "10", 
    borderColor: "grey", 
    borderWidth: "1", 
    border: "solid"


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
    this.state = { selectedValue: this.props.strategy, idNum: "1" };
    this.setState = this.setState.bind(this);

    this.handleLBF = this.handleLBF.bind(this);
    this.handleHIF = this.handleHIF.bind(this);
    this.handleOE = this.handleOE.bind(this);
  }

  handleLBF(){
    var newValue = "" + STRATEGY_TYPES.LOWEST_BALANCE_FIRST; 
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
    this.setState({idNum: "1"})

  }
   handleHIF(){
    var newValue = "" + STRATEGY_TYPES.HIGHEST_INTEREST_FIRST; 
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
     this.setState({idNum: "2"})

  }
  handleOE(){
    var newValue = "" + STRATEGY_TYPES.ORDER_ENTERED; 
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
     this.setState({idNum: "3"})

  }

  handleSelection(newValue) {
    console.log("strategy: "+this.state.selectedValue + " --> "+newValue);
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
  }
/*Make each RB a div, that has an onclick that changes the state, and alters the color(?) of the div*/

  render() {
    console.log(this.state.selectedValue); 
    return (
      <div style={sharedStyles.container}>
        <Header />
        <div style={sharedStyles.subContainer}>
          <Navbar />
          <div style={style.stratD}>
            <div onClick={this.handleLBF} style={this.state.idNum === "1" ? style.radioB : style.grey}>Lowest Amount First</div> 
            <div onClick={this.handleHIF} style={this.state.idNum === "2" ? style.radioB : style.grey}>Highest Interest First</div> 
            <div onClick={this.handleOE} style={this.state.idNum === "3" ? style.radioB : style.grey}>Order Entered</div> 
        
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