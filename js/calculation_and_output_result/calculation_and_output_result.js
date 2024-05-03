const operSum = (v1, v2) => {
    return v1+v2;
};
const operMinus = (v1, v2) => {
    return v1-v2;
};
const operMult = (v1, v2) => {
    return v1*v2;
};
const operDiv = (v1, v2) => {
    return v1/v2;
};
const operSumString = (v1, v2) => {
    return v1+v2;
};
const operSumArray = (v1, v2) => {
    sum = [];
    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
      sum.push ((v1[i] || 0) + (v2[i] || 0)); 
    };
    return sum;
};
const operRegect = (v) => {
    regect = !v;
    return (regect);
};


$("#executeBtn").click(function executeOperation() { 
    switch (selectedOperation) {
        case OperationType.PLUS: {
         $("#result").html(operSum(val1, val2));
        }
        case OperationType.MINUS: {
          $("#result").html(operMinus(val1, val2));
        }
        case OperationType.DIV: {
          $("#result").html(operDiv(val1, val2));
        }
        case OperationType.MULT: {
          $("#result").html(operMult(val1, val2));
        }
        case OperationType.SUMString: {
          $("#result").html(operSumString(val1, val2));
        }
        case OperationType.SUMArray: {
          $("#result").html(operSumArray(val1, val2));
        }
        case OperationType.Rejection : {
          $("#result").html(operRegect(val1));
        }
    };
});
