class PlanGenerator {

  constructor(debts) {
    this.debts = debts;
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

  index_of_least_balance_debt = arr => {
    if (arr.length === 0) return -1;
    
    let min_index = this.first_non_zero_index(arr);
    let min = arr[min_index];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0 &&  arr[i] < min) {
        min = arr[i];
        min_index = i;
      }
    }

    return min_index;
  }

  generate = () => {

    const debts = this.debts;
    console.log('printing from PlanGenerator')
    console.log(debts);

    const debt_amounts = debts.map(d => d.balance);
    const debt_min_payments = debts.map(d => d.minimumPayment);

    console.log(debt_amounts);
    console.log(debt_min_payments);
    const max_monthly_contribution = 700;

    const plan = [];
    let strategy_index = this.index_of_least_balance_debt(debt_amounts);

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
          strategy_index = this.index_of_least_balance_debt(debt_amounts);
          if (strategy_index === -1) break;
          
          while (curr_max_monthly_contribution > 0) {
            if (debt_amounts[strategy_index] < curr_max_monthly_contribution) {
              curr_max_monthly_contribution -= debt_amounts[strategy_index];
              row[strategy_index] += debt_amounts[strategy_index];
              debt_amounts[strategy_index] = 0;
              strategy_index = this.index_of_least_balance_debt(debt_amounts);
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