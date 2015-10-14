class MathHelper {
    static roundNumber(numberToRound, numberOfDecimalPlaces) {
        if (numberToRound === 0) {
            return 0;
        }

        if (!numberToRound) {
            return '';
        }

        var scrubbedNumber = numberToRound.toString().replace('$', '').replace(',', '');
        return Math.round(scrubbedNumber * Math.pow(10, numberOfDecimalPlaces)) / Math.pow(10, numberOfDecimalPlaces);
    }
    static addArray(values) { //adds array of values passed.
        var total = 0;
        $.each(values, function (index, value) {
            total += parseInt(this.convertToPennies(value)); //do math in pennies to assure accuracy. 
        });
        return total / 100; //convert back into dollars 
    }
    static convertToPennies(dollarValue) {
        if (dollarValue === 0) {
            return 0;
        }

        dollarValue = parseFloat(dollarValue);
        dollarValue = this.roundNumber(dollarValue, 2); //round to 2 decimal places.
        var dollarValueContainsDecimal = (dollarValue.toString().indexOf(".") !== -1);
        return (dollarValueContainsDecimal) ? parseInt(dollarValue.toString().replace('.', '')) : parseInt(dollarValue) * 100;
    }
}

export default MathHelper;
