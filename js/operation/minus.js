function OperationMinus() {
    Operation.call(this);

    this._id = 'minus';
    this._title = 'Операция вычитания';

    this.getValues = () => {
        let values = [];
        values[0] = $("#value_1").val();
        values[1] = $("#value_2").val();
        return values;
    }

    this._checkValues = (values) => {
        const value0 = ''+values[0]
        const value1 = ''+values[1]
        if ((value0 != '') && (value1 != '')) {
            const numValue0 = parseInt(value0);
            if (!numValue0) {
                return false;
            }
            const numValue1 = parseInt(value1);
            if (!numValue1) {
                return false;
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
        if (this._values.length == 2) {
            return parseInt(this._values[0]) - parseInt(this._values[1]);
        }
        return null;
    }
}