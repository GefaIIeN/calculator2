function OperationBoolean() {
    Operation.call(this);

    this._id = 'boolOper';
    this._title = 'Отрицание значения';

    this.getValues = () => {
        let values = [];
        const value = $("#BooleanValue_1").val().toLowerCase();
        if (''+value == 'false') {
            values.push(false);
        } else if (''+value == 'true') {
            values.push(true);
        }
        return values
    }

    this._checkValues = (values) => {
        const value0 = values[0]
        return typeof value0 == 'boolean';
    }


    this.setValues = (values) => {
        if (this._checkValues(values)) {
            this._values = values;
            return true;
        }
        return false;
    }


    this.execute = () => {
        if (this._values.length == 1) {
            return !(this._values[0])
        }
        return null;
    }  
}    