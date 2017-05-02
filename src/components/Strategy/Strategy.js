import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles'; 
import { Link } from 'react-router-dom';
import {RadioGroup, RadioButton} from 'react-radio-buttons';
import StratDiv from './strategyDiv.js';
import RadioButtonGroup from 'react-radio-button';


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
  }

}; 

const style2 = {
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
    .not-checked: {
          rootColor: 'green',
          color: 'green',
          background: 'green'
        }
};


class Strategy extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedValue: this.props.payoffStrategy,
      };
    this.setState = this.setState.bind(this);
    this.state.radioOptions = [
      {value:"Lowest Amount First", text:"Lowest Amount First"},
      {value:"Highest Interest First", text:"Highest Interest First"},
      {value:"Order Entered in Table", text:"Order Entered in Table"},
      {value:"Highest Amount First", text:"Highest Amount First"},
      {value:"Lowest Balance First", text:"Lowest Balance First"}
      ];
  }

  handleSelection(newValue) {
    console.log("strategy: "+this.state.selectedValue + " --> "+newValue);
    this.setState({selectedValue: newValue});
    this.props.setStrategy(newValue);
  }


  render() {
    return (
    	<div style={sharedStyles.container}>
	    	<Header />
	    	<div style={sharedStyles.subContainer}>
	    		<Navbar />
          <div style={style2}>

            {/*<RadioGroup onChange={(value) => this.handleSelection(value)} horizontal value={this.props.payoffStrategy}>
                <RadioButton value="Lowest Amount First" style={style2.checked}>
                  Lowest Amount First
                </RadioButton>
                <RadioButton value="Highest Interest First">
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
             
            </RadioGroup>*/}
          

            <RadioButtonGroup listOfItems={this.state.radioOptions} selectedItemCallback={this.handleSelection}>
              <div style={style.row}>
                <StratDiv name={"Lowest Amount First"} />
                <StratDiv name={"Highest Interest First"} />
                <StratDiv name={"Order Entered in Table"} />    
              </div>
              <div style={style.row}>
                <StratDiv name={"Highest Amount First"} />
                <StratDiv name={"Lowest Balance First"} />
              </div>
              </RadioButtonGroup>

              {/*<RadioButtonGroup listOfItems={this.state.radioOptions} 
                  selectedItemCallback={(value) => this.handleSelection(value)}
                  value = "Lowest Amount First"/>*/}

              <div style={style.row}>
                <StratDiv name={"Lowest Amount First"} />
                <StratDiv name={"Highest Interest First"} />
                <StratDiv name={"Order Entered in Table"} />    
              </div>
              <div style={style.row}>
                <StratDiv name={"Highest Amount First"} />
                <StratDiv name={"Lowest Balance First"} />
              </div>


          </div> 
	    	</div>
         <div style={style.row}>
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
