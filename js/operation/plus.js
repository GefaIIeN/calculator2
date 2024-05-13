function OperationPlus() {
    Operation.call(this);

    this._id = 'plus';
    this._title = 'Операция сложения';
   

    this.getValues = () => {
        input_1 = $("#value_1");
        input_2 = $("#value_2");
        this._values[0] = Number(input_1);
        this._values[1] = Number(input_2);
    }

    this._checkValues = (values) => {
        if ((values[0] != '') && (values[1] != '')) {
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

    this.execute = () => {
        if (this._values.length == 2) {
            return this._values[0] + this._values[1];
        }
        return null;
    }
}