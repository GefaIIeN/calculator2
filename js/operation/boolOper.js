function OperationBoolean() {
    Operation.call(this);

    this._id = 'boolOper';
    this._title = 'Отрицание значения';

    this.getValues = () => {

            const StringValueIntoBoolean = (string) => {
                if (string === 'false') {
                string = false;
                } else if (string === 'true') {
                string = true;
                };
                return string;
            };

            this._values[0] = StringValueIntoBoolean($("#value_1"));
            this._values[1] = StringValueIntoBoolean($("#value_2"));
    }

    this._checkValues = (values) => {
        if ((values[0] != '') && (values[1] = '')) {
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
            return !(this._values[0])
        }
        return null;
    }
}