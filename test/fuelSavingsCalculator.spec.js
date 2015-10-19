import chai from 'chai';
import Calculator from '../src/businessLogic/fuelSavingsCalculator';

chai.should();

describe('Fuel Savings Calculator', function () {
    describe("milesPerMonth", function () {
        it("converts a weekly timeframe to a monthly timeframe", function () {
            var milesPerWeek = 100;
            var milesPerMonth = Calculator.calculateMilesDrivenPerMonth(milesPerWeek, 'week');
            milesPerMonth.should.equal(433.3333333333333);
        });

        it("returns a monthly timeframe untouched", function () {
            var milesPerMonth = 300;
            var milesPerMonthCalculated = Calculator.calculateMilesDrivenPerMonth(milesPerMonth, 'month');
            milesPerMonthCalculated.should.equal(milesPerMonth); 
        });

        it("converts a yearly timeframe to a monthly timeframe", function () {
            var milesPerYear = 1200;
            var milesPerMonth = Calculator.calculateMilesDrivenPerMonth(milesPerYear, 'year');
            milesPerMonth.should.equal(100);
        });
    });

    describe("calculateMonthlyCost", function () {
        it("calculates 100 commute miles/month at 3.50/gallon at 20mpg to equal 17.5", function () {
            var monthlyCost = Calculator.calculateMonthlyCost(100, 3.50, 20);
            monthlyCost.should.equal(17.5);
        });
    });

    describe("calculateSavingsPerMonth", function () {
        it("returns 29.93 in savings per month with these settings", function () {
            var settings = {
                tradePpg: 3.75,
                tradeMpg: 24,
                newPpg: 3.75,
                newMpg: 38,
                milesDriven: 120,
                milesDrivenTimeframe: 'week'
            };

            var savingsPerMonth = Calculator.calculateSavingsPerMonth(settings);
            savingsPerMonth.should.equal(29.93);
        });

        it("returns 40.83 in savings per month with these settings", function () {
            var settings = {
                tradePpg: 4.15,
                tradeMpg: 24,
                newPpg: 3.75,
                newMpg: 38,
                milesDriven: 550,
                milesDrivenTimeframe: 'month'
            };

            var savingsPerMonth = Calculator.calculateSavingsPerMonth(settings);
            savingsPerMonth.should.equal(40.83);
        });

        it("returns -157.12 in loss per month with these settings", function () {
            var settings = {
                tradePpg: 3.15,
                tradeMpg: 40,
                newPpg: 3.75,
                newMpg: 18,
                milesDriven: 14550,
                milesDrivenTimeframe: 'year'
            };

            var savingsPerMonth = Calculator.calculateSavingsPerMonth(settings);
            savingsPerMonth.should.equal(-157.12);
        });
    });
});