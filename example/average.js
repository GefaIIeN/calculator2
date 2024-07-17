var index = 0;

$('.addField').click(function(){
    let newInput = $(`#fieldValue`).eq(0).clone()
    newInput.id = `fieldValue_${index++}`
    $('.fieldValue').append(newInput);
    return false;
});

$('.removeField').click(function() {
    var allInputs = document.getElementById('#multiFields').querySelectorAll('input[type="text"]');
    totalInputs = allInputs.length;
    if (totalInputs > 1) {
        allInputs[totalInputs - 1].parentNode.removeChild(allInputs[totalInputs - 1]);
    }
});

function OperationAverage() {

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