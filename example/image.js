document.querySelector('input[type="file"]').onchange = event => {
    let reader = new FileReader();
    reader.onload = e => document.querySelector('img').src = e.target.result;
    reader.readAsDataURL(event.target.files[0]);
};

function OperationImage() {

    this._id = 'averege';
    this._title = 'Вычисление среднего арифметического';
   

    this.getValues = () => {
        let values = [...$('.multiFields').$('input')].map(value => {
            value = parseInt(value);
        });
        return values  
    }

    this._checkValues = (values) => {
        if ((values[0] != '') && (values[1] != '')) {
            if (isNaN(parseInt(values[i]))) {
                return false 
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
        if (this._values.length > 1) {
            return this._values.reduce((a, b) => a + b) / this._values.length
        }
        return null;
    }
}