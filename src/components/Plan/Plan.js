import React, { Component } from 'react';
import { Table, Column, ColumnGroup, Cell } from 'fixed-data-table';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';

require('fixed-data-table/dist/fixed-data-table.css');

// you start with a list of debts
// take starting balance and monthly contribution
// 

const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3']
];

const STRATEGY = {
  'LOWEST_BALANCE': 0,
  'HIGHEST_INTEREST': 1
};

const getMinIndex = arr => {

  if (arr.length === 0) return -1;

  let min = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      minIndex = i;
      min = arr[i];
    }
  }

  return minIndex;
}

const generatePlan = (debts, contribution, strategy) => {

  const plan = [],
        debtMinPayments = [],
        debtAmounts = [];

  for (let i = 0; i < debts.length; i++) {
    debtMinPayments.push(debts[i].minimumPayment);
    debtAmounts.push(debts[i].balance);
  }

  for (let i = 0; i < debts.length; i++) {

    const row = [];
    let minPayment = debtMinPayments[i];

    if (debtAmounts[i] < minPayment) {
      minPayment -= debtAmounts[i];
      debtAmounts[i] = 0;
    } else {
      debtAmounts[i] -= minPayment;
    }

    row.push(debtAmounts[i]);
    contribution -= minPayment;

    // if it's the last debt, put the remaining monthly contribution
    // towards a certain debt based on the strategy chosen
    // the one below is snowball....not really, fix this later
    // this is so annoying
    if (i === debts.length - 1) {
      const minIndex = getMinIndex(debtAmounts);
      debtAmounts[minIndex] -= contribution;
      row[minIndex] += contribution;
    }

    plan.push(row);

  }

  return plan;

};

class Plan extends Component {

  render() {

    console.log(this.props.debts);

    const renderColumn = (debt, i) => {
      console.log(debt);
      return (
        <ColumnGroup key={i}>
          <Column
              fixed={true}
              header={<Cell>{debt.name}</Cell>}
              cell={<Cell>200</Cell>}
              width={150} />
        </ColumnGroup>
      );
    }

    return (
      <div style={sharedStyles.container}>
        <Header />
        <div style={sharedStyles.subContainer}>
          <Navbar />
          <Table
            rowHeight={30}
            rowsCount={rows.length}
            width={2000}
            height={500}
            headerHeight={30}>

            <ColumnGroup fixed={true}>
              <Column
                fixed={true}
                header={<Cell>Month</Cell>}
                cell={<Cell>Month Name</Cell>}
                width={150} />
            </ColumnGroup>

            {this.props.debts.map(renderColumn)}

          </Table>
        </div>
      </div>
    );
  }
}

export default Plan;
