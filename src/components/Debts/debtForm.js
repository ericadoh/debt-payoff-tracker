import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    padding: '15px 20px 15px 20px'
  }
};

class DebtForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      minimumPayment: '',
      interest: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMinPay = this.handleChangeMinPay.bind(this);
    this.handleChangeInterest = this.handleChangeInterest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeMinPay(event) {
    this.setState({minimumPayment: event.target.value});
  }

  handleChangeInterest(event) {
    this.setState({interest: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addDebt, onSubmit } = this.props;
    addDebt({...this.state});
    onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={style.header}>
          Debt Name:
          <input type="text" style={sharedStyles.input} value={this.state.name} onChange={this.handleChangeName} />
        </label>
          <label style={style.header}>
          Minimum Monthly Payment:
          <input type="text" style={sharedStyles.input} value={this.state.minimumPayment} onChange={this.handleChangeMinPay} />
        </label>
          <label style={style.header}>
          Interest:
          <input type="text" style={sharedStyles.input} value={this.state.interest} onChange={this.handleChangeInterest} />
        </label>
        <input style={sharedStyles.button} type="submit" value="Submit" />
      </form>
    );
  }
}
export default DebtForm; 