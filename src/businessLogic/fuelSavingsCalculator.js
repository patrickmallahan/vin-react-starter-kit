import mathHelper from './mathHelper';
import NumberFormatter from './numberFormatter';

class FuelSavingsCalculator {
    static calculateMilesDrivenPerMonth(milesDriven, milesDrivenTimeframe) {
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
    }
    static calculateMonthlyCost(milesDrivenPerMonth, ppg, mpg) {
        let gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
        return gallonsUsedPerMonth * ppg;
    }
    static calculateSavingsPerMonth(config) {
        if (!config.milesDriven) {
            return 0;
        }

        let milesDrivenPerMonth = this.calculateMilesDrivenPerMonth(config.milesDriven, config.milesDrivenTimeframe);
        let tradeFuelCostPerMonth = this.calculateMonthlyCost(milesDrivenPerMonth, config.tradePpg, config.tradeMpg);
        let newFuelCostPerMonth = this.calculateMonthlyCost(milesDrivenPerMonth, config.newPpg, config.newMpg);
        let savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;

        return mathHelper.roundNumber(savingsPerMonth, 2);
    }
    //Returns savings object
    static calculateSavings(config) {
        let monthlySavings = this.calculateSavingsPerMonth(config);
        let annualSavings = monthlySavings * 12;
        let threeYearSavings = annualSavings * 3;
        return {
            monthly: NumberFormatter.getCurrencyFormattedNumber(monthlySavings),
            annual: NumberFormatter.getCurrencyFormattedNumber(annualSavings),
            threeYear: NumberFormatter.getCurrencyFormattedNumber(threeYearSavings)
        };
    }
}

export default FuelSavingsCalculator;
