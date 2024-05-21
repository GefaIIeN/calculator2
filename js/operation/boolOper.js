function OperationBoolean() {
    Operation.call(this);

    this._id = 'boolOper';
    this._title = 'Отрицание значения';

    this.getValues = () => {
        let values = [];
        values[0] = $("#value_5").val();
        return values;
    }

    this._checkValues = (values) => {
        const value0 = values[0]
        if (value0 != '') {
            if (value0 === 'false') {
                this._values[0] = false;
                } else if (value0 === 'true') {
                this._values[0] = true;
                }
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
        if (this._values.length == 1) {
            return !(this._values[0])
    }
    return null;
    }  
}    

