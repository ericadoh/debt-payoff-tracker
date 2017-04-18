import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';
import ReactHighcharts from 'react-highcharts';

const config = {
    
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        data: [500, 476, 450, 430, 370, 350, 325, 250, 220, 175, 130, 50]
    }],

    title: {
        text: 'Debt over Time'
    },

    yAxis: {
        title: {
            text: 'Debt'
        }
    }
};

class Graph extends Component {

  render() {
    return (
    	<div style={sharedStyles.container}>
    		<Header />
            <div style={sharedStyles.subContainer} >
                <Navbar />
                <ReactHighcharts config={config}></ReactHighcharts>
            </div>
    	</div>
      
    );
  }

}

export default Graph;

