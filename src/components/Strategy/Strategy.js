import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import STRATEGY_TYPES from './StrategyTypes';
import sharedStyles from '../../styles/styles'; 
import { Link } from 'react-router-dom';

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
  instruction: {
    marginTop: 40,
    marginBottom: 30,
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    color: 'black',
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center'
  },
  stratD: {
    boxSizing: 'border-box', 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px'
  }, 
  green: {  
    cursor: 'pointer',
    boxSizing: 'border-box',
    fontFamily: sharedStyles.mainFont,
    fontSize: 40, 
    backgroundColor: sharedStyles.mainColor, 
    color: 'white', 
    fontWeight: 700, 
    width: 250, 
    textAlign: "center",
    padding: '10px 20px 10px 20px',
    margin: "7px", 
    borderRadius: "10px", 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  grey: {
    cursor: 'pointer',
    boxSizing: 'border-box',
    fontFamily: sharedStyles.mainFont,
    fontSize: 40, 
    backgroundColor: "white", 
    color: 'grey', 
    fontWeight: 700, 
    width: 250, 
    textAlign: "center",
    padding: '10px 20px 10px 20px',
    margin: "7px", 
    borderRadius: "10px", 
    border: "3px solid #eee", 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
    console.log(props);
    this.state = { selectedValue: this.props.strategy};

    this.setState = this.setState.bind(this);

    this.handleLBF = this.handleLBF.bind(this);
    this.handleHIF = this.handleHIF.bind(this);
    this.handleOE = this.handleOE.bind(this);
  }

  handleLBF(){
    var newValue = STRATEGY_TYPES.LOWEST_BALANCE_FIRST;
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
    this.props.saveCGF(this.props.debts, this.props.monthly, 0);
  }
   handleHIF(){
    var newValue = STRATEGY_TYPES.HIGHEST_INTEREST_FIRST; 
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
    this.props.saveCGF(this.props.debts, this.props.monthly, 1);
  }
  handleOE(){
    var newValue = STRATEGY_TYPES.ORDER_ENTERED; 
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
    this.props.saveCGF(this.props.debts, this.props.monthly, 2);
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
          <div style={style.column}>
            <span style={style.instruction}>{'Select a payoff strategy:'}</span>
            <div style={style.stratD}>
              <div className={'grow'} onClick={this.handleLBF} style={this.state.selectedValue === 0 ? style.green : style.grey}>Lowest Amount First</div> 
              <div className={'grow'} onClick={this.handleHIF} style={this.state.selectedValue === 1 ? style.green : style.grey}>Highest Interest First</div> 
              <div className={'grow'} onClick={this.handleOE} style={this.state.selectedValue === 2 ? style.green : style.grey}>Order Entered</div> 

            </div> 
            <div style={sharedStyles.buttonContainer}>
              <Link className={'grow'}
                style={sharedStyles.nextButton}
                to="/graph" >
                  Save
              </Link>
            </div>
          </div>
        </div>
         
      </div>
    );
    } else {
      return (
        <div style={sharedStyles.container}>
          <Header />
          <div style={{...sharedStyles.subContainer, ...sharedStyles.column}}>
            <span style={style.instruction}>{'Select a payoff strategy:'}</span>
            <div style={style.stratD}>
              <div className={'grow'} onClick={this.handleLBF} style={this.state.selectedValue === 0 ? style.green : style.grey}>Lowest Amount First</div> 
              <div className={'grow'} onClick={this.handleHIF} style={this.state.selectedValue === 1 ? style.green : style.grey}>Highest Interest First</div> 
              <div className={'grow'} onClick={this.handleOE} style={this.state.selectedValue === 2 ? style.green : style.grey}>Order Entered</div> 
            </div> 
            <div style={sharedStyles.buttonContainer}>
              <Link className={'grow'}
                style={sharedStyles.nextButton}
                to="/graph" >
                  Finish
              </Link>
            </div>
          </div>
        </div>
    );
    }
    
  }
}

export default Strategy;