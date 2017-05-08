import STRATEGY_TYPES from '../src/components/Strategy/StrategyTypes';
import PlanGenerator from '../src/components/Plan/PlanGenerator';

describe('plan generation tests', function() {

	it('1 debt, lowest balance first', function() {
  	const debts = [
  		{ name: 'Student', balance: 1000, minimumPayment: 250, interest: .05, dateEntered: new Date() }
  	];
  	const strategy = STRATEGY_TYPES.LOWEST_BALANCE_FIRST;
  	const monthly = 300;

  	const planGenerator = new PlanGenerator(debts, strategy, monthly);
		const output = planGenerator.generate();
  	const expectedOutput = [[300], [300], [300], [109.25]];

  	expect(output).toEqual(expectedOutput);
  });

	it('2 debts', function() {

		const debts = [
			{ name: 'Student', balance: 20, minimumPayment: 1, interest: .07, dateEntered: new Date() },
			{ name: 'Car', balance: 12, minimumPayment: 5, interest: .09, dateEntered: new Date() }
		];
		const strategy = STRATEGY_TYPES.HIGHEST_INTEREST_FIRST;
		const monthly = 8;

		const planGenerator = new PlanGenerator(debts, strategy, monthly);
		const output = planGenerator.generate();
		const expectedOutput = [[1,7], [2.87,5.13],[8,0],[8,0],[0.51,0]];

		expect(output).toEqual(expectedOutput);

  });

  it('3 debts test 1, lowest balance first', function() {

		const debts = [
			{ name: 'Student', balance: 24, minimumPayment: 3.5, interest: .11, dateEntered: new Date() },
			{ name: 'Car', balance: 22, minimumPayment: 10, interest: .03, dateEntered: new Date() },
			{ name: 'Other', balance: 30, minimumPayment: 2, interest: .05, dateEntered: new Date() }
		];
		const strategy = STRATEGY_TYPES.LOWEST_BALANCE_FIRST;
		const monthly = 16.5;

		const planGenerator = new PlanGenerator(debts, strategy, monthly);
		const output = planGenerator.generate();
		const expectedOutput = [[3.50,11, 2],[3.50,11,2],[14.41,0.09,2],[3.19,0,13.31],[0,0,11.20]];

		expect(output).toEqual(expectedOutput);

  });

  it('3 debts test 1, highest interest first', function() {

		const debts = [
			{ name: 'Student', balance: 24, minimumPayment: 3.5, interest: .11, dateEntered: new Date() },
			{ name: 'Car', balance: 22, minimumPayment: 10, interest: .03, dateEntered: new Date() },
			{ name: 'Other', balance: 30, minimumPayment: 2, interest: .05, dateEntered: new Date() }
		];
		const strategy = STRATEGY_TYPES.HIGHEST_INTEREST_FIRST;
		const monthly = 16.5;

		const planGenerator = new PlanGenerator(debts, strategy, monthly);
		const output = planGenerator.generate();
		const expectedOutput = [[4.50,10,2], [4.50, 10,2],[12.40,2.10,2],[3.17,0,13.33],[0,0,11.18]];

		expect(output).toEqual(expectedOutput);

  });

  it('3 debts test 2, lowest balance first', function() {

		const debts = [
			{ name: 'Student', balance: 50, minimumPayment: 4, interest: .06, dateEntered: new Date() },
			{ name: 'Car', balance: 55, minimumPayment: 10, interest: .03, dateEntered: new Date() },
			{ name: 'Other', balance: 60, minimumPayment: 6, interest: .10, dateEntered: new Date() }
		];
		const strategy = STRATEGY_TYPES.LOWEST_BALANCE_FIRST;
		const monthly = 21;

		const planGenerator = new PlanGenerator(debts, strategy, monthly);
		const output = planGenerator.generate();
		const expectedOutput = [[5,10,6],[5,10,6],[5,10,6],[5,10,6],[5,10,6],[9.55,5.45,6],[15,0,6],[1.68,0,19.32],[0,0,1.38]];

		expect(output).toEqual(expectedOutput);

  });

  it('3 debts test 2, highest interest first', function() {

		const debts = [
			{ name: 'Student', balance: 50, minimumPayment: 4, interest: .06, dateEntered: new Date() },
			{ name: 'Car', balance: 55, minimumPayment: 10, interest: .03, dateEntered: new Date() },
			{ name: 'Other', balance: 60, minimumPayment: 6, interest: .10, dateEntered: new Date() }
		];
		const strategy = STRATEGY_TYPES.HIGHEST_INTEREST_FIRST;
		const monthly = 21;

		const planGenerator = new PlanGenerator(debts, strategy, monthly);
		const output = planGenerator.generate();
		const expectedOutput = [[4,10,7],[4,10,7],[4,10,7],[4,10,7],[4,10,7],[4,5.45,11.55],[5.24,0,15.76],[21,0,0],[1.23,0,0]];

		expect(output).toEqual(expectedOutput);

  });

  it('4 debts, lowest balance first', function() {

		const debts = [
			{ name: 'Student', balance: 61, minimumPayment: 4, interest: .06, dateEntered: new Date() },
			{ name: 'Car', balance: 55, minimumPayment: 10, interest: .03, dateEntered: new Date() },
			{ name: 'Other', balance: 60, minimumPayment: 6, interest: .10, dateEntered: new Date() },
			{ name: 'Medical', balance: 300, minimumPayment: 20, interest: .045, dateEntered: new Date() }
		];
		const strategy = STRATEGY_TYPES.LOWEST_BALANCE_FIRST;
		const monthly = 50;

		const planGenerator = new PlanGenerator(debts, strategy, monthly);
		const output = planGenerator.generate();
		const expectedOutput = [[4,20,6,20],[4,20,6,20],[4,15.27,10.73,20],[4,0,26,20],[16.94,0,13.06,20],[29.56,0,0,20.44],[0,0,0,50],[0,0,0,50],[0,0,0,50],[0,0,0,36.90]];

		expect(output).toEqual(expectedOutput);

  });

});