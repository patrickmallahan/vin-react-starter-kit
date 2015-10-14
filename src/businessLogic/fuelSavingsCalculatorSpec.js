import calculator from './fuelSavingsCalculator';
import {expect} from 'chai';

describe('Fuel Savings Calculator', function () {
    describe("Calculate Commute Miles Per Month", function () {
        it("should convert a weekly timeframe to a monthly timeframe", function () {
            var milesPerWeek = 100;
            var milesPerMonth = calculator.calculateMilesDrivenPerMonth(milesPerWeek, 'week');
            expect(milesPerMonth).to.equal(433.3333333333333);
        });

        it("should return a monthly timeframe untouched", function () {
            var milesPerMonth = 300;
            var milesPerMonthCalculated = calculator.calculateMilesDrivenPerMonth(milesPerMonth, 'month');
            expect(milesPerMonthCalculated).to.equal(milesPerMonth); 
        });

        it("should convert a yearly timeframe to a monthly timeframe", function () {
            var milesPerYear = 1200;
            var milesPerMonth = calculator.calculateMilesDrivenPerMonth(milesPerYear, 'year');
            expect(milesPerMonth).to.equal(100);
        });
    });

    describe("Calculate Monthly Cost", function () {
        it("should calculate 100 commute miles/month at 3.50/gallon at 20mpg to equal 17.5", function () {
            var monthlyCost = calculator.calculateMonthlyCost(100, 3.50, 20);
            expect(monthlyCost).to.equal(17.5);
        });
    });

    describe("Calculate Monthly Savings", function () {
        it("should return 29.93 in savings per month with these settings", function () {
            var settings = {
                tradePpg: 3.75,
                tradeMpg: 24,
                newPpg: 3.75,
                newMpg: 38,
                milesDriven: 120,
                milesDrivenTimeframe: 'week'
            };

            var savingsPerMonth = calculator.calculateSavingsPerMonth(settings);
            expect(savingsPerMonth).to.equal(29.93);
        });

        it("should return 40.83 in savings per month with these settings", function () {
            var settings = {
                tradePpg: 4.15,
                tradeMpg: 24,
                newPpg: 3.75,
                newMpg: 38,
                milesDriven: 550,
                milesDrivenTimeframe: 'month'
            };

            var savingsPerMonth = calculator.calculateSavingsPerMonth(settings);
            expect(savingsPerMonth).to.equal(40.83);
        });

        it("should return -157.12 in loss per month with these settings", function () {
            var settings = {
                tradePpg: 3.15,
                tradeMpg: 40,
                newPpg: 3.75,
                newMpg: 18,
                milesDriven: 14550,
                milesDrivenTimeframe: 'year'
            };

            var savingsPerMonth = calculator.calculateSavingsPerMonth(settings);
            expect(savingsPerMonth).to.equal(-157.12);
        });
    });
});