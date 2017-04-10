import React, { Component } from 'react';
import styles from '../../styles/styles';

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: styles.mainFont,
    fontSize: 30,
    backgroundColor: styles.mainColor,
    color: 'white',
    padding: '120px 180px 120px 180px'
  },
  button: {
    background: styles.mainColor, 
    color: 'white', 
    fontSize: 30, 
    margin: 10, 
    padding: '25px 10px', 
    border: '2 solid'+styles.mainColor, 
    borderRadius: 5
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
      <form onSubmit={this.handleSubmit}>
        <label style={style.header}>
          How much money can you pay towards your debts per month?
          <input type="text" style={styles.subContainer} value={this.state.monthly} onChange={this.handleChange} />
        </label>
        <div style={style.wrapper}>
        <input style={style.button} type="submit" value="Submit" />
        </div> 
      </form>
    );
  }
}
export default ContributionForm; 