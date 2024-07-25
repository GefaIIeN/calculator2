function OperationPlusArray() {
    Operation.call(this);

    this._id = 'plusArray';
    this._title = 'Операция Сложение массивов';
    this._values = [];
    this._values2 = [];

    this.getValues = () => {

        let values = [];
        let arr1 = $("#StringValue_1").val();
        values = arr1.split(",");
        let values2 = [];
        let arr2 = $("#StringValue_2").val();
        values2 = arr2.split(",");

        return {
            values: values, 
            values2: values2
        }
    };


    this._checkValues = () => {
        const allValues = this.getValues();
        const value0 = allValues.values;
        const value1 = allValues.values2;

        console.log(value0, value1)

        const checkValue = (mass) => {
            const numValue = mass.map(el=>parseInt(el));

            if (numValue.includes(NaN)) {
                return true;
             }
             return false;
        }

            if ((value0[0] != '') && (value1[0] != '')) {
                    if (checkValue(value0)) {
                        console.log(checkValue(value0))
                        return false;
                    }
                    if (checkValue(value1)) {
                        console.log(checkValue(value1))
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
    };

    this.execute = () => {

            let sum = [];
            const value0 = this._values;
            const value1 = this._values2;
            console.log(value0)
            console.log(value1)

        
            const totalLength =  Math.max(value0.length, value1.length);
            console.log(totalLength)

            for (let i = 0; i < totalLength; i++) {
                sum[i] = (value0[i] || 0) + (value1[i] || 0);
            }
        return sum;
    }
}
