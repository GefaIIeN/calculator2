function OperationPlusArray() {
    Operation.call(this);

    this._id = 'plusArray';
    this._title = 'Операция Сложение массивов';
    this._values2 = [];

    this.getValues = () => {
        input_1 = (($("#value_1")).split(","));
        input_2 = (($("#value_2")).split(","));
        this._values.filter(element => {
        return Number(element)
        })
        this._values2.filter(element => {
            return Number(element)
        })
    }

    this._checkValues = (values, values2) => {
        if ((values[0] != '') && (values2[0] != '')) {
            return true;
        }
        return false;
    }

    this.setValues = (values) => {
        if (this._checkValues(values)) {
            this._values = values;
            return true;
        }
        return false;
    }

    this.execute = (values, values2) => {

            this.sum = [];
            for (let i = 0; i < Math.max(this._values.length, this._values2.length); i++) {
              sum.push ((values[i] || 0) + (values2[i] || 0)); 
            };
            return this.sum;
        }
        return null;
    
}