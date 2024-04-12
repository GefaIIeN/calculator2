
const getValue1 = function(){
  const val1 = document.getElementById("value_1");
  if (val1 != null) {
    return val1;
  }
  console.error('Перваая переменная value_1 не обнаружена');
}

const getValue2 = function(){
  const val2 = document.getElementById("value_2");
  if (val2 != null) {
    return val2;
  }
  console.error('Вторая переменная value_2 не обнаружена');
  return null;
}

const OperationType = {
  PLUS: '+',
  MINUS: '-',
  DIV: '/',
  MULT: '*',
  SUMString: 'Сложение строк',
  SUMArray: 'Сложение массивов',
  Rejection: 'Отрицание значения'
}

let selectedOperation = OperationType.PLUS;

const handleClickOperation = (operation) => {
  if (operation == '+') {
    selectedOperation = OperationType.PLUS
  } else if (operation == '-') {
    selectedOperation = OperationType.MINUS
  } else if (operation == '/') {
    selectedOperation = OperationType.DIV
  } else if (operation == '*') {
    selectedOperation = OperationType.MULT
  }  else if (operation == 'Сложение строк') {
    selectedOperation = OperationType.SUMString
  }  else if (operation == 'Сложение массивов') {
    selectedOperation = OperationType.SUMArray
  }  else if (operation == 'Отрицание значения') {
    selectedOperation = OperationType.Rejection 
  }

  const selectedOperationElem = document.getElementById("selectedOperation");

  if(selectedOperationElem) {
    selectedOperationElem.innerText = selectedOperation;
  }
}

const checkNumberValue = (val) => {
  var value = Number(val);
 return isNaN(value);
}

const ArrayValueIntoNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
 };
 return array;
};

const StringValueIntoBoolean = (string) => {
  if (string === 'false') {
    string = false;
  } else if (string === 'true') {
    string = true;
  } else {
    string = "notWORKING";
  }
  return string;
}

const operSum = (v1, v2) => {
  return v1+v2;
}
const operMinus = (v1, v2) => {
  return v1-v2;
}
const operMult = (v1, v2) => {
  return v1*v2;
}
const operDiv = (v1, v2) => {
  return v1/v2;
}
const operSumString = (v1, v2) => {
  return v1+v2;
}
const operSumArray = (massive1, massive2) => {
  sum = [];
  for (let i = 0; i < Math.max(massive1.length, massive2.length); i++) {
    sum.push ((massive1[i] || 0) + (massive2[i] || 0));
  };
  return sum;
}
const operRegect = (v1, v2) => {
  regect1 = !v1;
  regect2 = !v2;
  return (v1 + " = " + regect1 + ", " + v2 + " = " + regect2);
}

const executeOperation = () => {

 var forSimpleOperationWhithNumber = () => {
  const v1 = getValue1().value;
  if (checkNumberValue(v1)) {
    console.error('Переменная v1 должна быть числом');
    return;
  }
  const v2 = getValue2().value;
  if (checkNumberValue(v2)) {
    console.error('Переменная v2 должна быть числом');
    return;
  }
  return ((v1_value = parseInt(v1)), (v2_value = parseInt(v2)));
 }
 
 var forOperationWhithArray = () => {

 const v1 = getValue1().value;;
 const v2 = getValue2().value;
 var FIRSTmassive1 = v1.split(",");
 var FIRSTmassive2 = v2.split(",");
 
  if (FIRSTmassive1.some(checkNumberValue)) {
    console.error('Переменная v1 должна содержать только числа');
    return;
  };
  if (FIRSTmassive2.some(checkNumberValue)) {
    console.error('Переменная v2 должна содержать только числа');
    return;
  }; 

  return ((massive1 = ArrayValueIntoNumber(FIRSTmassive1)), (massive2= ArrayValueIntoNumber(FIRSTmassive2)));
 }

 var forOperationWhithString = () => {
  return ((v1= getValue1().value), (v2= getValue2().value))
 }

 var forOperationWhithFalseandTrue = () => {
  const v1 = getValue1().value;
  const v2 = getValue2().value;

  value1_Boolean = StringValueIntoBoolean(v1);
  value2_Boolean = StringValueIntoBoolean(v2);


  if (value1_Boolean == "notWORKING") {
    console.error('Переменная v1 должна быть false or true');
    return;
 };
  if (value2_Boolean == "notWORKING") {
    console.error('Переменная v2 должна быть false or true');
    return;
 };
 return (value1_Boolean, value2_Boolean);
};

  switch (selectedOperation) {
    case OperationType.PLUS: {
      forSimpleOperationWhithNumber();
      return operSum(v1_value, v2_value);
    }
    case OperationType.MINUS: {
      forSimpleOperationWhithNumber();
      return operMinus(v1_value, v2_value);
    }
    case OperationType.DIV: {
      forSimpleOperationWhithNumber();
      return operDiv(v1_value, v2_value);
    }
    case OperationType.MULT: {
      forSimpleOperationWhithNumber();
      return operMult(v1_value, v2_value);
    }
    case OperationType.SUMString: {
      forOperationWhithString();
      return operSumString(v1, v2);
    }
    case OperationType.SUMArray: {
      forOperationWhithArray();
      return operSumArray(massive1, massive2);
    }
    case OperationType.Rejection : {
      forOperationWhithFalseandTrue();
      return (operRegect(value1_Boolean, value2_Boolean));
    }
  };
}

const typeOFoperation = () => {
  switch (selectedOperation) {
    case OperationType.PLUS: {
      return ("Для выполнения этой операции используется тип числа");
    }
    case OperationType.MINUS: {
      return ("Для выполнения этой операции используется тип числа");
    }
    case OperationType.DIV: {
      return ("Для выполнения этой операции используется тип числа");
    }
    case OperationType.MULT: {
      return ("Для выполнения этой операции используется тип числа");
    }
    case OperationType.SUMString: {
      return ("Для выполнения этой операции используется тип строки");
    }
    case OperationType.SUMArray: {
      return ("Для выполнения этой операции используется тип строки из числовых значений, записанных через запятую");
    }
    case OperationType.Rejection : {
      return ("Для выполнения этой операции используется тип строки, значение которых false/true");
    }
  };
}

const handleClickExecuteOperation = () => {
  const resElem = document.getElementById("result");  
  if (resElem) {
    resElem.innerText = executeOperation();
  }


document.addEventListener("DOMContentLoaded", () => {

  const val1 = getValue1();
  if (val1) {
    val1.addEventListener('change', (event) => {
      console.log(event);
    })
  }

  const val2 = getValue1();
  if (val2) {
    val2.addEventListener('change', (event) => {
      console.log(event);
    })
  }
  handleClickOperation(OperationType.PLUS)
});

}

const handleClickTypeOfOperation = () => {
  const typeElem = document.getElementById("type_of_operation");  
  if (typeElem) {
    typeElem.innerText = typeOFoperation();
  };
}