import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import StratDiv from './strategyDiv.js';
import defaultStyles from '../../styles/styles'; 

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: defaultStyles.mainFont,
    fontSize: 30,
    backgroundColor: defaultStyles.mainColor,
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

class Strategy extends Component {
  render() {
    return (
    	<div style={defaultStyles.container}>
	    	<Header />
	    	<div style={defaultStyles.subContainer}>
	    		<Navbar />
          <div style={style.stratD}>
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
    	</div>
      
    );
  }
}

export default Strategy;
