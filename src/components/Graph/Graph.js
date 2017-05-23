import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';
import ReactHighcharts from 'react-highcharts';
import PlanGenerator from '../Plan/PlanGenerator';

const roundTo = (value, decimals) => {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
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

        var prev = 0;
        for (var month=0; month<plan.length; month++) {
            for (var debt=0; debt<plan[0].length; debt++) {
                prev = series[debt].data[series[debt].data.length-1];
                series[debt].data.push(prev - plan[month][debt]);
            }
        }
        return series
    }


    renderInterest(interest) {
        const { debts } = this.props;

        return (
            debts.map((d, i) => {
                return <div>{d.name + ': ' + roundTo(interest[i], 2)}</div>
            })
        );
    }


    render() {
        const { debts, strategy, monthly } = this.props;
        const planGenerator = new PlanGenerator(debts, strategy, monthly);
        const info = planGenerator.generate();
        const plan = info.table;
        const interest = info.interest;

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
                },
                floor: 0.00
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
                    <div>
                        {this.renderInterest(interest)}
                    </div>
                </div>
        	</div>
          
        );
    }

    componentWillMount() {
        this.props.setShowNav(true);
    }
}

export default Graph;

