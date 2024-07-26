function OperationAverage() {
    Operation.call(this);

    this._id = 'averege';
    this._title = 'Вычисление среднего арифметического';
   

    this.getValues = () => {
        let values = [];
        let numValues = [];
        values = [...$('#multiFields').find('input')].map(v => v.value);
        numValues = values.map(el=>parseInt(el));
      return numValues
    }

    this._checkValues = () => {
        const values = this.getValues();
        console.log (values);

        if (values.includes(NaN)) {
            return false;
        }
      return true;
    }
    


    this.setValues = () => {
        const values = this.getValues();
        if (this._checkValues(values)) {
            this._values = values;
            return true;
        }
        return false;
    }


    this.execute = () => {
        console.log (this._values);
        if (inputCounter > 1) {
            const sum = this._values.reduce((acc, number) => acc + number, 0);
            const length = inputCounter;
            console.log (sum);
            console.log (length);
            return sum / length;
        }
        return null;
    }
}