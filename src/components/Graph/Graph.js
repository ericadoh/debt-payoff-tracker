import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';

class HighChart extends Component {
  render() {
    return (
    	<div style={styles.container}>
    		<Navbar />
    		<div>
                GRAPH COMPONENT
                componentDidMount() {
                // Extend Highcharts with modules
                if (this.props.modules) {
                    this.props.modules.forEach(function (module) {
                        module(Highcharts);
                    });
                }
                // Set container which the chart should render to.
                this.chart = new Highcharts[this.props.type || "Chart"](
                    this.props.container, 
                    this.props.options
                );
    }

    //Destroy chart before unmount.
    componentWillUnmount: function () {
        this.chart.destroy();
    },
    //Create the div which the chart will be rendered to.
    render: function () {
        return React.createElement('div', { id: this.props.container });
    }
            </div>
    	</div>
      
    );
  }
}

export default Graph;

/*
var React = require('highcharts');
var Highcharts = require('highcharts');

class Highchart extends Component {

    // When the DOM is ready, create the chart.
    componentDidMount() {
        // Extend Highcharts with modules
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        // Set container which the chart should render to.
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container, 
            this.props.options
        );
    }

    //Destroy chart before unmount.
    componentWillUnmount: function () {
        this.chart.destroy();
    },
    //Create the div which the chart will be rendered to.
    render: function () {
        return React.createElement('div', { id: this.props.container });
    }
});*/



