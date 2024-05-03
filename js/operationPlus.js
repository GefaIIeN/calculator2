function OperationPlus() {
    Operation.call(this);

    this._id = 'plus';
    this._title = 'Операция сложения';

    this.init = () => {
        // создание полей и подпись к событиям

        // ...

        // создание объектов выода результата

        // ...
    }

    this._checkFields = (fields) => {
        if ((fields[0] != '') && (fields[1] != '')) {
            return true;
        }
        return false;
    }

    this.setFields = (fields) => {
        if (this._checkFields(fields)) {
            this._fields = fields;
            return true;
        }
        return false;
    }

    this.execute = () => {
        // выполнение действия
        if (this._fields.length == 2) {
            return this._fields[0] + this._fields[1];
        }
        return null;
    }
}