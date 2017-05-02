import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import $ from 'jquery';

import Plan from './components/Plan/Plan';
import Graph from './components/Graph/Graph';
import Debts from './components/Debts/Debts';
import Contribution from './components/Contribution/Contribution';
import Strategy from './components/Strategy/Strategy';


const history = createBrowserHistory();

class App extends Component {

	constructor(props) {
		super(props);

		{/*$.ajax({
			type: 'GET',
			url: 'https://www.capitalgoodfund.org/api/debt-tracker/load.php',
			success: function(data) {
				console.log(data);

			}.bind(this),
			error: function(xhr, status, err) {
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		})*/}

		this.state = { 
			debts: [
				{ name: 'Blah', balance: 200, minimumPayment: 100, interest: .08 },
				{ name: 'School', balance: 1400, minimumPayment: 200, interest: .1 },
				{ name: 'Other', balance: 900, minimumPayment: 300, interest: .05 },
				{ name: 'Erica', balance: 450, minimumPayment: 50, interest: .05 }
			],
			payoffStrategy: "Lowest Amount First",
			monthly: "10"
		};
		this.setState = this.setState.bind(this);
	}

	addDebt = debt => {
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
	
	setStrategy = strategy => {
		this.setState({payoffStrategy: strategy});
	}

	setMonthly = contribution => {
		this.setState({monthly: contribution});
	}

	saveCGF() {
		var params = {
			monthlyPayoffAmount: this.state.monthly,
			payoffStrategy: this.state.payoffStrategy,
		};
		$.ajax({
			type: 'POST',
			url: 'https://capitalgoodfund.org/api/debt-tracker/save.php',
			data: params,
			success: function(data) {
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		});
	}


	render() {
    	return (
    		<Router history={history}>
			    <div>
					<Route path="/table" render={()=><Plan debts={this.state.debts} />} />
					<Route path="/graph" render={()=><Graph debts={this.state.debts} />} />
					<Route path="/debts"
						render={()=><Debts debts={this.state.debts}
						addDebt={this.addDebt}
						deleteDebt={this.deleteDebt} />} />
					<Route path="/contribution" render={()=><Contribution 
						debts={this.state.debts} 
						monthly={this.state.monthly} 
						setMonthly={this.setMonthly} />} />
					<Route path="/strategy" render={()=><Strategy debts={this.state.debts} 
						payoffStrategy={this.state.payoffStrategy} 
						setStrategy={this.setStrategy} />} />
			    </div>
			</Router>
    	);
  	} 

}

export default App;
