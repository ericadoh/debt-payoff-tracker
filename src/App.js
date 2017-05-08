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
			debts: [
{ name: 'Student', balance: 20, minimumPayment: 1, interest: .07, dateEntered: new Date() },
{ name: 'Car', balance: 12, minimumPayment: 5, interest: .09, dateEntered: new Date() }
],
			strategy: STRATEGY_TYPES.HIGHEST_INTEREST_FIRST,
			monthly: 8,
			showNav: false,
			browserHistory: history,
		};
		this.setState = this.setState.bind(this);
	}



	addDebt = debt => {
		console.log(debt);
		debt.dateEntered = new Date();
		this.setState(previousState => ({
		    debts: [...previousState.debts, debt]
		}));
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
		}));
	}
	
	setStrategy = newStrategy => {
		this.setState({
			strategy: newStrategy
		});
	}

	setMonthly = contribution => {
		this.setState({monthly: contribution});
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
				console.log("SAVE CGF")
				console.log(data);

			}.bind(this),
			error: function(xhr, status, err) {
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		})
	}

	setShowNav = navState => {
		this.setState({showNav: navState});
	}

	showNav() {
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
						showNav={this.state.showNav}/>} />
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
