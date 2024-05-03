function Operation() {
    this._id = '';
    this._title = '';

    this._fields = [];
    this._res = '';

    this.getTitle = () => {
        return this._title;
    }

    this.getId = () => {
        return this._id;
    }

    this.getResule = () => {
        return this._res;
    }

    this.init = () => {
        // создание полей и подпись к событиям

        // создание объектов выода результата
    }

    this.checkFields = (fields) => {
        return false;
    }

    this.setFields = () => {

    }

    this.execute = () => {
        // выполнение действия

    }
}