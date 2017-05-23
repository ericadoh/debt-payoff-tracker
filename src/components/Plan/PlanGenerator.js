import STRATEGY_TYPES from '../Strategy/StrategyTypes';

/*
  Takes in an array of debts, the chosen strategy, and the monthly contribution, and outputs
  an object with two properties:
  - table: a 2D array where each row is a month and each column corresponds to a debt.
    the value of a cell [r][c] is the amount of money the user should pay towards debt c during month r
  - interest: an array of total interest accumulated for each debt at the end of the payment plan.
*/

class PlanGenerator {

  constructor(debts, strategy, monthly) {
    this.debts = debts;
    this.strategy = strategy;
    this.monthly = monthly;
  }

  // Returns true if the input array is all non-zero values, and false otherwise.
  not_zero = arr => {
    return arr.filter(x => x > 0).length !== 0;
  }

  // Returns first index of the input array that has a non-zero value.
  first_non_zero_index = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        return i;
      }
    }
    return -1;
  }

  // Returns index of the next debt to be prioritized in the payment plan.
  // Priority is determined by the chosen strategy.
  choose_strategy_index = (debt_balances, debt_min_payments) => {

    const strategy = this.strategy;

    switch (strategy) {
      case STRATEGY_TYPES.LOWEST_BALANCE_FIRST:
        return this.index_of_least_balance_debt(debt_balances);
      case STRATEGY_TYPES.HIGHEST_INTEREST_FIRST:
        return this.index_of_highest_interest_debt(debt_balances);
      case STRATEGY_TYPES.ORDER_ENTERED:
        return this.index_of_earliest_entered_debt(debt_balances);
      default:
        return -1;
    }

  }

  // Takes in an array of the current debt balances and returns the index
  // of the earliest non-zero debt balance.
  // TODO: This should now be determined by ranking order.
  index_of_earliest_entered_debt = debt_balances => {

    if (debt_balances.length === 0) return -1;

    const debts = this.debts;
    
    let index = this.first_non_zero_index(debt_balances);
    if (index === -1) return index;
    let earliest_date = debts[index].dateEntered;
    
    for (let i = 0; i < debt_balances.length; i++) {
      if (debt_balances[i] !== 0 && debts[i].dateEntered < earliest_date) {
        earliest_date = debts[i].dateEntered;
        index = i;
      }
    }

    return index;

  }

  // Takes in an array of the current debt balances and returns the index
  // of the debt balance that has the highest interest (and is non-zero).
  index_of_highest_interest_debt = debt_balances => {

    if (debt_balances.length === 0) return -1;

    const debts = this.debts;
    
    let index = this.first_non_zero_index(debt_balances);
    if (index === -1) return index;
    let highest_interest = debts[index].interest;
    
    for (let i = 0; i < debt_balances.length; i++) {
      if (debt_balances[i] !== 0 && debts[i].interest > highest_interest) {
        highest_interest = debts[i].interest;
        index = i;
      }
    }

    return index;
  }

  // Takes in an array of the current debt balances and returns the index
  // of the debt balance that has the lowest balance (and is non-zero).
  index_of_least_balance_debt = debt_balances => {

    if (debt_balances.length === 0) return -1;

    let min_index = this.first_non_zero_index(debt_balances);
    let min = debt_balances[min_index];
    
    for (let i = 0; i < debt_balances.length; i++) {
      if (debt_balances[i] !== 0 && debt_balances[i] < min) {
        min = debt_balances[i];
        min_index = i;
      }
    }

    return min_index;
  }

  generate = () => {

    const debts = this.debts;
    const debt_amounts = debts.map(d => d.balance);
    const debt_interests = debts.map(d => d.interest / 12);
    const debt_min_payments = debts.map(d => d.minimumPayment);
    const max_monthly_contribution = this.monthly;
    const plan = [];
    const interest = new Array(debts.length).fill(0);

    let strategy_index = this.choose_strategy_index(debt_amounts, debt_min_payments);

    // while the debts have not been paid off
    while (this.not_zero(debt_amounts)) {

      // accumulate interest
      for (let i = 0; i < debt_amounts.length; i++) {
        debt_amounts[i] = (1 + debt_interests[i]) * debt_amounts[i];
        interest[i] += debt_interests[i] * debt_amounts[i];
      }
      
      // initialize a row for the payment plan
      const row = [];
      let curr_max_monthly_contribution = max_monthly_contribution;
      
      // iterating through each debt
      for (let i = 0; i < debt_amounts.length; i++) {

        if (debt_amounts[i] <  debt_min_payments[i]) {
          curr_max_monthly_contribution -= debt_amounts[i];
          row.push(debt_amounts[i]);
          debt_amounts[i] = 0;
        } else {
          curr_max_monthly_contribution -= debt_min_payments[i];
          row.push(debt_min_payments[i]);
          debt_amounts[i] -= debt_min_payments[i];
        }
        
        // if the current debt is the last debt, 
        // put the remaining monthly contribution towards the debt chosen by the strategy
        if (i === debt_amounts.length - 1) {

          while (curr_max_monthly_contribution > 0) {

            if (strategy_index === -1) break;

            if (debt_amounts[strategy_index] < curr_max_monthly_contribution) {
              curr_max_monthly_contribution -= debt_amounts[strategy_index];
              row[strategy_index] += debt_amounts[strategy_index];
              debt_amounts[strategy_index] = 0;
              strategy_index = this.choose_strategy_index(debt_amounts, debt_min_payments);
            } else {
              debt_amounts[strategy_index] -= curr_max_monthly_contribution;
              row[strategy_index] += curr_max_monthly_contribution;
              break;
            }
          }
        }
      }

      plan.push(row);
      
    }

    const info = {
      'table': plan,
      'interest': interest
    }

    return info;
  }

};

export default PlanGenerator;