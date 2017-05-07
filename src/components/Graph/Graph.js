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
        this.setState = this.setState.bind(this);
    }


    arrangeData(debts, plan) {

        let series = [];
        for (var i=0; i<debts.length; i++) {
            series.push({
                name: debts[i].name,
                data: [debts[i].balance]
            });
        }
        console.log(series);

        var prev = 0;
        for (var month=0; month<plan.length; month++) {
            for (var debt=0; debt<plan[0].length; debt++) {
                prev = series[debt].data[series[debt].data.length-1];
                series[debt].data.push(prev - plan[month][debt]);
            }
        }
        return series
    }


    render() {
        const { debts, strategy, monthly } = this.props;
        const planGenerator = new PlanGenerator(debts, strategy, monthly);
        const plan = planGenerator.generate();
        const months = generateMonths(plan.length);

        console.log(plan);
        let debtSeries = this.arrangeData(this.props.debts, plan);

        //console.log(series);

        const config = {
        
            xAxis: {
                /*categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']*/
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                title: {
                    text: 'Month'
                }
            },

            series: debtSeries,

            title: {
                text: 'Debt over Time'
            },

            yAxis: {
                title: {
                    text: 'Debt Balance'
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

    componentWillMount() {
        console.log("willMount");
        this.props.setShowNav(true);
        this.props.saveCGF(this.props.debts, this.props.monthly, this.props.strategy);
    }
}

export default Graph;

