import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';
import ReactHighcharts from 'react-highcharts';
import PlanGenerator from '../Plan/PlanGenerator';

// 0 is January and 11 is December
const generateMonths = numRows => {
  const today = new Date();
  const months = [];
  for (let i = 0; i < numRows; i++) {
    months.push(today.getMonth());
    today.setMonth(today.getMonth() + 1); 
  }
  return months;
}


class Graph extends Component {

    constructor(props) {
        super(props);
        this.monthly = this.props.monthly;
    }


  render() {

    const planGenerator = new PlanGenerator(this.props.debts);
    const plan = planGenerator.generate();
    const months = generateMonths(plan.length);

    console.log(plan);

    const config = {
    
        xAxis: {
            /*categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']*/
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },

        series: [
            {
                name: 'debt1',
                data: [500, 476, 450, 430, 370, 350, 325, 250, 220, 175, 130, 50],
            },
            {
                name: 'debt2',
                data: [100, 200, 300, 400, 500, 600, 700, 800, 600, 300, 200, 30]
            }
        ],

        title: {
            text: 'Debt over Time'
        },

        yAxis: {
            title: {
                text: 'Debt'
            }
        },
        
        xAxis: {
            title: {
                text: 'Month'
            }
        },
        
        plotOptions: {
            series: {
                compare: 'percent',
                showInNavigator: true
            }
        }

    };


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

