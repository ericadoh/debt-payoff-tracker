import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';
import Highcharts from 'highcharts';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts';

// var graphStyle = {
//     width: '400px',
//     height: '400px'
//     };

var config = {
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
        },
        // tooltip: {
        //     style: {
        //         width: '500px',
        //         height: '500px'
        //     }
        // }
    };

class Graph extends Component {
    // componentDidMount() {
    //     let chart = this.refs.chart.getChart();
    //     chart.series.addPoint({x: 10, y: 12});
    // }
  render() {
    return (
    	<div style={styles.container}>
    		<Header />
            <div >
                <div style={styles.subContainer} >
                    <Navbar />
                </div>

        		<div >
                    <div >
                        <ReactHighcharts config={config}></ReactHighcharts>
                    </div>
                </div>
            </div>
    	</div>
      
    );
  }
}
export default Graph;
