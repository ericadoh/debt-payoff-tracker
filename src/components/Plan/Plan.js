import React, { Component } from 'react';
import { Table, Column, ColumnGroup, Cell } from 'fixed-data-table';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';

import PlanGenerator from './PlanGenerator';

require('fixed-data-table/dist/fixed-data-table.css');

const STRATEGY = {
  'LOWEST_BALANCE': 0,
  'HIGHEST_INTEREST': 1
};

// 0 is January and 11 is December
const generateMonths = numRows => {
  const today = new Date();
  const months = [];
  for (let i = 0; i < numRows; i++) {
    months.push(today.getMonth());
    today.setMonth(today.getMonth() + 1); 
  }
  return months;
}

class Plan extends Component {

  render() {

    const planGenerator = new PlanGenerator(this.props.debts);
    const plan = planGenerator.generate();
    const months = generateMonths(plan.length);

    console.log(plan);

    const renderColumn = (debt, i) => {
      console.log(debt);
      return (
        <ColumnGroup key={i}>
          <Column
              fixed={true}
              header={<Cell>{debt.name}</Cell>}
              cell={({rowIndex, ...props}) => {
                console.log(...props);
                return (<Cell {...props}>
                  {plan[rowIndex][i]}
                </Cell>);
              }}
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
            rowsCount={plan.length}
            width={2000}
            height={500}
            headerHeight={30}>

            <ColumnGroup fixed={true}>
              <Column
                fixed={true}
                header={<Cell>Month</Cell>}
                cell={({rowIndex, ...props}) => {
                  console.log(...props);
                  return (<Cell {...props}>
                    {months[rowIndex]}
                  </Cell>);
                }}
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
