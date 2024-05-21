function OperationPlusArray() {
    Operation.call(this);

    this._id = 'plusArray';
    this._title = 'Операция Сложение массивов';
    this._values2 = [];

    this.getValues = () => {
        let values = [];
        let values2 = [];
        let arr1 = []
        let arr2 = []
        arr1 = $("#value_3")
        arr2 = $("#value_4")
        this._values = arr1.split(",");
        this._values2 = arr2.split(",");

        this._values.filter(element => {
            return parseInt(element)
            })
        this._values2.filter(element => {
           return parseIntr(element)
            })

        return (values, values2)
    }


    this._checkValues = (values, values2) => {
        const value0 = ''+values[0]
        const value1 = ''+values2[0]

        if ((value0 != '') && (value1 != '')) {
            const numValue = this._values.filter(element => {
                return parseInt(element)
            });
            if (!numValue) {
                return false;
            }

            const numValue1 = this._values2.filter(element => {
                return parseIntr(element);
            });
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

            this.sum = [];
            for (let i = 0; i < Math.max(this._values.length, this._values2.length); i++) {
              sum.push ((this._values[i] || 0) + (this._values2[i] || 0)); 
            };
            return this.sum;
        }
        return null;
    
}