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
  }
};

class ContributionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {monthly: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({monthly: event.target.value});
  }

  handleSubmit(event) {
    alert('A payment was submitted: ' + this.state.monthly);
    event.preventDefault();
  }

  render() {
    return (
      <form style={style.form} onSubmit={this.handleSubmit}>
        <label style={style.label}>
          <p>What is the maximum amount of money you can pay towards your debts per month?</p>
          <input style={sharedStyles.input} type="text" value={this.state.monthly} onChange={this.handleChange} />
        </label>
        <div style={style.wrapper}>
          <input style={sharedStyles.button} type="submit" value="Submit" />
        </div> 
      </form>
    );
  }
}
export default ContributionForm; 