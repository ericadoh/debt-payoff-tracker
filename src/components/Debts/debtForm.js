import React, { Component } from 'react';
import sharedStyles from '../../styles/styles';

const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: sharedStyles.mainFont,
    fontSize: 30,
    backgroundColor: sharedStyles.mainColor,
    color: 'white',
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
    //alert('A debt was submitted: ' + this.state.name +" "+this.state.minimumPayment+" "+this.state.interest);
    event.preventDefault();
    const { addDebt } = this.props;
    const { name, minimumPayment, interest } = this.state;
    addDebt({ name: name, minimumPayment: minimumPayment, interest: interest });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={style.header}>
          Debt Name:
          <input type="text" style={sharedStyles.subContainer} value={this.state.name} onChange={this.handleChangeName} />
        </label>
          <label style={style.header}>
          Minimum Monthly Payment:
          <input type="text" style={sharedStyles.subContainer} value={this.state.minimumPayment} onChange={this.handleChangeMinPay} />
        </label>
          <label style={style.header}>
          Interest:
          <input type="text" style={sharedStyles.subContainer} value={this.state.interest} onChange={this.handleChangeInterest} />
        </label>
        <input style={sharedStyles.button} type="submit" value="Submit" />
      </form>
    );
  }
}
export default DebtForm; 