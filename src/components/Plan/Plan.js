import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';

import PlanGenerator from './PlanGenerator';

require('fixed-data-table/dist/fixed-data-table.css');

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// 0 is January and 11 is December
const generateMonths = numRows => {
  const today = new Date();
  const months = [];
  for (let i = 0; i < numRows; i++) {
    months.push(MONTH_NAMES[today.getMonth()] + ' ' + today.getFullYear());
    today.setMonth(today.getMonth() + 1); 
  }
  return months;
}

const compare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        console.log('does not match at :' + i + ' ' + j);
        return false;
      }
    }
  }
  
  return true;
}

const style = {
  cell: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: sharedStyles.mainFont
  }
};

class Plan extends Component {

  render() {

    const { debts, strategy, monthly } = this.props;

    const planGenerator = new PlanGenerator(debts, strategy, monthly);
    const plan = planGenerator.generate();

    console.log(plan);
    
    const months = generateMonths(plan.length);

    const renderColumn = (debt, i) => {
      return (
          <Column key={i}
            header={<Cell>{debt.name}</Cell>}
            cell={({rowIndex, ...props}) => {
              console.log(...props);
              return (<Cell style={style.cell} {...props}>
                {plan[rowIndex][i]}
              </Cell>);
            }}
            width={150} />
      );
    }

    return (
      <div style={sharedStyles.container}>
        <Header />
        <div style={sharedStyles.subContainer}>
          <Navbar />
          <Table
            rowHeight={40}
            rowsCount={plan.length}
            width={1000}
            height={500}
            headerHeight={40}>

            <Column
              fixed={true}
              header={<Cell>Month</Cell>}
              cell={({rowIndex, ...props}) => {
                console.log(...props);
                return (<Cell style={style.cell} {...props}>
                  {months[rowIndex]}
                </Cell>);
              }}
              width={150} />

              {this.props.debts.map(renderColumn)}

          </Table>
        </div>
      </div>
    );
  }
}

export default Plan;
