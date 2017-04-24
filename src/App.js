import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Plan from './components/Plan/Plan';
import Graph from './components/Graph/Graph';
import Debts from './components/Debts/Debts';
import Contribution from './components/Contribution/Contribution';
import Strategy from './components/Strategy/Strategy';

const history = createBrowserHistory();

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			debts: [
				{ name: 'Blah', minimumPayment: 600, interest: .08 },
				{ name: 'School', minimumPayment: 510, interest: .1 },
				{ name: 'Other', minimumPayment: 780, interest: .05 }
			],
			payoffStrategy: "Lowest Amount First",
			monthly: "10"
		};
		this.setState = this.setState.bind(this);
		console.log("monthly:"+this.state.monthly);
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
