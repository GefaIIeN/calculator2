function OperationPlusArray() {
    Operation.call(this);

    this._id = 'plusArray';
    this._title = 'Операция Сложение массивов';
    this._values = [];
    this._values2 = [];

    this.getValues = () => {

        let values = [];
        let arr1 = $("#value_3").val();
        values = arr1.split(",");
        let values2 = [];
        let arr2 = $("#value_4").val();
        values2 = arr2.split(",");

        return {
            values: values, 
            values2: values2
        }
    }


    this._checkValues = () => {
        
        const value0 = this.getValues().values;
        const value1 = this.getValues().values2;

        console.log(value0, value1)

        if ((value0[0] != '') && (value1[0] != '')) {
                const numValue = this.getValues().values.map(el=>parseInt(el))
                if (numValue.includes(NaN)) {
                    return false;
                }

                const numValue1 = this.getValues().values2.map(el=>parseInt(el))
                if (numValue1.includes(NaN)) {
                    return false;
            }
            return true;
        }
        return false;
    }

    this.setValues = () => {
        if (this._checkValues()) {
            this._values = this.getValues().values.map(Number);
            this._values2 = this.getValues().values2.map(Number);
            return true;
        }
        return false;
    }

    this.execute = () => {

            this.sum = [];
            const value0 = this._values;
            const value1 = this._values2;

            for (let i = 0; i < Math.max(value0.length, value1.length); i++) {
                this.sum.push ((value0[i] || 0) + (value1[i] || 0)); 
            };
            return this.sum;
        }
        return null;
    
}