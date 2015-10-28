import mathHelper from './mathHelper';
import NumberFormatter from './numberFormatter';

//This file uses the factory function pattern instead of a class.
//Just showing an alternative to using a class.
//This declares a function with a private method.
//The public function returns an object literal.
//Could arguably be called FuelSavingCalculatorFactory.
let FuelSavingsCalculator = function() {
    //private
    let calculateMonthlyCost = function(milesDrivenPerMonth, ppg, mpg) {
        let gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
        return gallonsUsedPerMonth * ppg;
    };

    //public
    return {
        calculateMilesDrivenPerMonth: function(milesDriven, milesDrivenTimeframe) {
            switch (milesDrivenTimeframe) {
                case 'week':
                    return (milesDriven * 52) / 12;
                case 'month':
                    return milesDriven;
                case 'year':
                    return milesDriven / 12;
                default:
                    throw 'Unknown milesDrivenTimeframe passed: ' + milesDrivenTimeframe;
            }
        },

        calculateSavingsPerMonth: function(config) {
            if (!config.milesDriven) {  
                return 0;
            }

            let milesDrivenPerMonth = this.calculateMilesDrivenPerMonth(config.milesDriven, config.milesDrivenTimeframe);
            let tradeFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, config.tradePpg, config.tradeMpg);
            let newFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, config.newPpg, config.newMpg);
            let savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;

            return mathHelper.roundNumber(savingsPerMonth, 2);
        },

        //Returns savings object
        calculateSavings: function(config) {
            let monthlySavings = this.calculateSavingsPerMonth(config);
            let annualSavings = monthlySavings * 12;
            let threeYearSavings = annualSavings * 3;
            return {
                monthly: NumberFormatter.getCurrencyFormattedNumber(monthlySavings),
                annual: NumberFormatter.getCurrencyFormattedNumber(annualSavings),
                threeYear: NumberFormatter.getCurrencyFormattedNumber(threeYearSavings)
            };
        }
    };
};

export default FuelSavingsCalculator;
