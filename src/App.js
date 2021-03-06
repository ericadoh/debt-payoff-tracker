import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import $ from 'jquery';

import Plan from './components/Plan/Plan';
import Graph from './components/Graph/Graph';
import Debts from './components/Debts/Debts';
import Contribution from './components/Contribution/Contribution';
import Strategy from './components/Strategy/Strategy';
import STRATEGY_TYPES from './components/Strategy/StrategyTypes';


const history = createBrowserHistory();
{/*history.push('/debts');*/}

class App extends Component {

	constructor(props) {
		super(props);

		$.ajax({
			type: 'GET',
			url: 'https://capitalgoodfund.org/api/debt-tracker/load.php',
			crossDomain: true,
			success: function(data) {
				console.log("===GET===");
				console.log(data);

			}.bind(this),
			error: function(xhr, status, err) {
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		})

		this.state = { 
			debts: [],
			strategy: STRATEGY_TYPES.LOWEST_BALANCE_FIRST,
			monthly: 0,
			showNav: false,
			browserHistory: history,
		};
		this.setState = this.setState.bind(this);
		//this.setState({showNav : this.initialShowNav()});
	}

	checkDebtsContribution() {
	    let debts = this.state.debts;
	    console.log(debts);
	    let totalMonthly = 0;
	    for (var i=0; i<debts.length; i++) {
	      totalMonthly += debts[i].minimumPayment;
	    }

	    if (totalMonthly > this.state.monthly) {
	      alert('ERROR: Your total amount of money you must pay per month, '
	      	+ 'now exceeds your monthly contribution you inputted. '
	        + 'You will now be redirected to the monthly contribution page to increase your monthly contribution');
	      this.state.browserHistory.push('/contribution');
	    }
  }

	addDebt = debt => {
		debt.dateEntered = new Date();
		debt.interest = debt.interest * .01;
		this.setState(previousState => ({
		    debts: [...previousState.debts, debt]
		}), function() {
			this.saveCGF(this.state.debts, this.state.monthly, this.state.strategy);
	        if (this.state.showNav) {
	          this.checkDebtsContribution();
	        }
		});
	}

	/*
		NOTE: This just uses the debt's name as an ID to figure out whether
		it should be deleted or not. Ideally, each debt would have some sort
		of unique ID.
	*/
	deleteDebt = debt => {
		const index = this.state.debts.map(d => d.id).indexOf(debt.id);
		this.setState(previousState => ({
			debts: previousState.debts.filter((_, i) => i !== index)
		}), function() {
			this.saveCGF(this.state.debts, this.state.monthly, this.state.strategy);
		});
		
	}
	
	setStrategy = newStrategy => {
		this.setState({
			strategy: parseInt(newStrategy)
		});
	}

	setMonthly = contribution => {
		this.setState({monthly: parseFloat(contribution)});
	}

	saveCGF = (debts, monthly, strategy) => {
		var params = {
			"debts": debts,
			"monthlyPayoffAmount": monthly,
			"payoffStrategy": strategy,
		};
		$.ajax({
			type: 'POST',
			url: 'https://capitalgoodfund.org/api/debt-tracker/save.php',
			crossDomain: true,
			cache: 'false',
			dataType: 'json',
			data: JSON.stringify(params),   //JSON.stringify?

			success: function(data) {
				console.log("===SAVE CGF===");
				console.log(params);
				console.log(data);
				console.log('==============');

			}.bind(this),
			error: function(xhr, status, err) {
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		})
	}

	setShowNav = navState => {
		this.setState({showNav: navState});
	}

	initialShowNav() {
		if (this.state.debts.length == 0 || this.state.monthly =='') {
			return false;
		} else {
			return true;
		}
	}



	render() {
    	return (
    		<Router history={history}>
			    <div>
					<Route path="/table" render={()=> <Plan
						debts={this.state.debts}
						strategy={this.state.strategy}
						monthly={this.state.monthly} />} />
					<Route path="/graph" render={()=><Graph 
						debts={this.state.debts}
						monthly={this.state.monthly} 
						strategy={this.state.strategy}
						showNav={this.state.showNav}
						setShowNav={this.setShowNav}/>} />
					<Route path="/debts"
						render={()=><Debts 
						debts={this.state.debts}
						monthly={this.state.monthly}
						strategy={this.state.strategy}
						saveCGF={this.saveCGF}
						addDebt={this.addDebt}
						deleteDebt={this.deleteDebt} 
						showNav={this.state.showNav}
						browserHistory={this.state.browserHistory}/>} />
					<Route path="/contribution" render={()=><Contribution 
						debts={this.state.debts} 
						monthly={this.state.monthly} 
						strategy={this.state.strategy}
						saveCGF={this.saveCGF}
						setMonthly={this.setMonthly} 
						showNav={this.state.showNav}
						browserHistory={this.state.browserHistory}/>} />
					<Route path="/strategy" render={()=><Strategy
						debts={this.state.debts} 
						monthly={this.state.monthly}
						strategy={this.state.strategy}
						saveCGF={this.saveCGF} 
						setStrategy={this.setStrategy} 
						showNav={this.state.showNav}
						setShowNav={this.setShowNav}/>} />

			    </div>
			</Router>
    	);
  	} 

}

export default App;
