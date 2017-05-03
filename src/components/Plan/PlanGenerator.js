import STRATEGY_TYPES from '../Strategy/StrategyTypes';

// make everything work with just debts array first

class PlanGenerator {

  constructor(debts, strategy) {
    this.debts = debts;
    this.strategy = strategy;
  }

  not_zero = arr => {
    return arr.filter(x => x > 0).length !== 0;
  }

  first_non_zero_index = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        return i;
      }
    }
    return -1;
  }

  choose_strategy_index = (debt_balances, debt_min_payments) => {

    const strategy = this.strategy;
    console.log('strategy in choose_strategy_index: ' + strategy);

    switch (strategy) {
      case STRATEGY_TYPES.LOWEST_BALANCE_FIRST:
        console.log('choosing STRATEGY_TYPES.LOWEST_BALANCE_FIRST');
        return this.index_of_least_balance_debt(debt_balances);
      case STRATEGY_TYPES.HIGHEST_INTEREST_FIRST:
        // do something
        break;
      case STRATEGY_TYPES.ORDER_ENTERED:
        // do something
        break;
      default:
        return -1;
    }

  }

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

    console.log('index_of_least_balance_debt is returning: ' + min_index);
    return min_index;
  }

  generate = () => {

    const debts = this.debts;
    const debt_amounts = debts.map(d => d.balance);
    const debt_min_payments = debts.map(d => d.minimumPayment);
    const max_monthly_contribution = 700;
    const plan = [];
    
    let strategy_index = this.choose_strategy_index(debt_amounts, debt_min_payments);

    while (this.not_zero(debt_amounts)) {
      
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
          // decrementing the debt amount its min payment
          debt_amounts[i] -= debt_min_payments[i];
        }
        
        // if the current debt is the last debt, 
        // put remaining monthly contribution towards the debt
        // chosen by the strategy
        if (i === debt_amounts.length - 1) {
          strategy_index = this.choose_strategy_index(debt_amounts, debt_min_payments);
          if (strategy_index === -1) break;
          
          while (curr_max_monthly_contribution > 0) {
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

    return plan;
  }

};

export default PlanGenerator;