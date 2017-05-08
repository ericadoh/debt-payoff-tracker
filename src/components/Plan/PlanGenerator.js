import STRATEGY_TYPES from '../Strategy/StrategyTypes';

// make everything work with just debts array first

function roundTo(n, digits) {
     if (digits === undefined) {
       digits = 0;
     }

     var multiplicator = Math.pow(10, digits);
     n = parseFloat((n * multiplicator).toFixed(11));
     var test =(Math.round(n) / multiplicator);
     return +(test.toFixed(2));
   }

class PlanGenerator {

  constructor(debts, strategy, monthly) {
    this.debts = debts;
    this.strategy = strategy;
    this.monthly = monthly;
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
    console.log('strategy: ' + this.strategy);

    switch (strategy) {
      case STRATEGY_TYPES.LOWEST_BALANCE_FIRST:
      console.log('DOING LOWEST BALANCE FIRST');
        return this.index_of_least_balance_debt(debt_balances);
      case STRATEGY_TYPES.HIGHEST_INTEREST_FIRST:
        return this.index_of_highest_interest_debt(debt_balances);
      case STRATEGY_TYPES.ORDER_ENTERED:
        return this.index_of_earliest_entered_debt(debt_balances);
      default:
        return -1;
    }

  }

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

  index_of_least_balance_debt = debt_balances => {

    if (debt_balances.length === 0) return -1;

    console.log(debt_balances);
    
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
    
    let strategy_index = this.choose_strategy_index(debt_amounts, debt_min_payments);

    while (this.not_zero(debt_amounts)) {

      for (let i = 0; i < debt_amounts.length; i++) {
        debt_amounts[i] = roundTo((1 + debt_interests[i]) * debt_amounts[i], 2);
      }
      
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

        console.log('~~~~~~~~~~~~~~ BEFORE ADDING SNOWBALL ~~~~~~~~~~~~~~~~');
        console.log(row);
        console.log(debt_amounts);
        console.log(curr_max_monthly_contribution)
        
        // if the current debt is the last debt, 
        // put remaining monthly contribution towards the debt
        // chosen by the strategy
        if (i === debt_amounts.length - 1) {
          //strategy_index = this.choose_strategy_index(debt_amounts, debt_min_payments);
          console.log('strategy index: ' + strategy_index);


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