function Operation() {
    this._id = '';
    this._title = '';
    this._values = [];
    this._res = '';

    this.getTitle = () => {
        return this._title;
    }

    this.getId = () => {
        return this._id;
    }

    this.getResult = () => {
        return this._res;
    }

    this.getValues = () => {
        return null;
    }

    this.checkValues = (value) => {
        return false;
    }

    this.setValues = () => {
        return false;
    }

    this.execute = () => {
        return null;
    }
}