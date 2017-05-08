import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';

const style = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    fontFamily: sharedStyles.mainFont,
    fontWeight: 700,
    fontSize: 30,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  wrapper: {
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center'
  }, 
  rightWrap: {
    alignItems: 'right',
    justifyContent: 'right', 
    textAlign: 'right', 
    width: '100%'
  }
};

class ContributionForm extends Component {

  constructor(props) {
    super(props);
    this.debts = this.props.debts; 
    this.state = {monthly: this.props.monthly, canLink: this.props.showNav};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({monthly: event.target.value});
  }

  handleSubmit(event) {
    var data = 0; 
    for (var i=0; i<this.debts.length; i++) {
           
                data += this.debts[i].minimumPayment; 
            
      }
    if(this.state.monthly < data){
      alert("Your monthly contribution is not high enough to cover your minimum monthly payments.");
      event.preventDefault(); 
    }
    else{
      event.preventDefault();
      this.setState({canLink: true});
      this.props.setMonthly(this.state.monthly);
      this.props.browserHistory.push('/strategy');
    }
  }

  render() {
    return (
      <form style={style.form} onSubmit={this.handleSubmit}>
        <label style={style.label}>
          <p>What is the maximum amount of money you can pay towards your debts per month?</p>
          <input style={sharedStyles.input} type="number" value={this.state.monthly} onChange={this.handleChange} />
        </label>
        <div style={style.wrapper}>
          <input style={sharedStyles.button} type="submit" value="Submit" />
        </div> 
       
      </form>
    );
  }
}
export default ContributionForm; 