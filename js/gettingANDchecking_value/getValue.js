function getValue (val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
};

function gettingValues() { 

    if (selectedOperation = OperationType.PLUS || OperationType.MINUS || OperationType.MULT || OperationType.DIV) {
        var NumberValue = new getValue (
            val1 = parseInt($("#value_1")),
            val2 = parseInt($("#value_2")),
        );
    } else if (selectedOperation = OperationType.SUMArray) {
        var ArrayValue = new getValue (
            () => {
                const ArrayValueIntoNumber = (array) => {
                    for (let i = 0; i < array.length; i++) {
                    array[i] = Number(array[i]);
                };
                return array;
                };

                val1 = ArrayValueIntoNumber(($("#value_1")).split(","));
                val2 = ArrayValueIntoNumber(($("#value_2")).split(","));

                return (val1, val2);
            }  
        );
    } else if (selectedOperation = OperationType.SUMString) {
        var StringValue = new getValue (
            val1 = $("#value_1"),
            val2 = $("#value_2"),
        );
    } else {
        var BooleanValue = new getValue (
            () => {
                const StringValueIntoBoolean = (string) => {
                    if (string === 'false') {
                    string = false;
                    } else if (string === 'true') {
                    string = true;
                    };
                    return string;
                };

                val1 = StringValueIntoBoolean($("#value_1"));
                val2 = StringValueIntoBoolean($("#value_2"));

                return (val1, val2)
            }
        );
    };
};
