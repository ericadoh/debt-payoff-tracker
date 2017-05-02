import React, { Component } from 'react';
import { Table, Column, ColumnGroup, Cell } from 'fixed-data-table';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import sharedStyles from '../../styles/styles';

import PlanGenerator from './PlanGenerator';

require('fixed-data-table/dist/fixed-data-table.css');

const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3']
];

const STRATEGY = {
  'LOWEST_BALANCE': 0,
  'HIGHEST_INTEREST': 1
};

class Plan extends Component {

  render() {

    const planGenerator = new PlanGenerator(this.props.debts);
    const plan = planGenerator.generate();

    console.log(plan);

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
