function OperationPlusString() {
    Operation.call(this);

    this._id = 'plusString';
    this._title = 'Операция Сложение строк';

    this.getValues = () => {
        let values = [];
        values[0] = $("#StringValue_1").val();
        values[1] = $("#StringValue_2").val();
        return values;
    }

    this._checkValues = (values) => {
        const value0 = '' + values[0]
        const value1 = '' + values[1]
        if ((value0 != '') && (value1 != '')) {
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
            return (this._values[0]) + (this._values[1]);
        }
        return null;
    }
}