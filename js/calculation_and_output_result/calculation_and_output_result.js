

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
const operSumArray = (massive1, massive2) => {
    sum = [];
    for (let i = 0; i < Math.max(massive1.length, massive2.length); i++) {
      sum.push ((massive1[i] || 0) + (massive2[i] || 0)); 
    };
    return sum;
};
const operRegect = (v) => {
    regect = !v;
    return (regect);
};

const executeOperation = () => {
    switch (selectedOperation) {
        case OperationType.PLUS: {
          forSimpleOperationWhithNumber();
          return (result.innerHTML = operSum(v1_value, v2_value));
        }
        case OperationType.MINUS: {
          forSimpleOperationWhithNumber();
          return (result.innerHTML = operMinus(v1_value, v2_value));
        }
        case OperationType.DIV: {
          forSimpleOperationWhithNumber();
          return (result.innerHTML = operDiv(v1_value, v2_value));
        }
        case OperationType.MULT: {
          forSimpleOperationWhithNumber();
          return (result.innerHTML = operMult(v1_value, v2_value));
        }
        case OperationType.SUMString: {
          forOperationWhithString();
          return (result.innerHTML = operSumString(v1, v2));
        }
        case OperationType.SUMArray: {
          forOperationWhithArray();
          return (result.innerHTML = operSumArray(massive1, massive2));
        }
        case OperationType.Rejection : {
          forOperationWhithFalseandTrue();
          return (result.innerHTML = operRegect(value_Boolean));
        }
    };
};

