import React, { Component } from 'react';
import { Table, Column, ColumnGroup, Cell } from 'fixed-data-table';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/styles';

require('fixed-data-table/dist/fixed-data-table.css');

const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3']
];

class Plan extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />
        <div style={styles.subContainer}>
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
                cell={<Cell>what</Cell>}
                width={150} />
            </ColumnGroup>


            <ColumnGroup>
              <Column
                fixed={true}
                header={<Cell>Debt 1</Cell>}
                cell={<Cell>what</Cell>}
                width={150} />
            </ColumnGroup>

          </Table>
        </div>
      </div>
    );
  }
}

export default Plan;
