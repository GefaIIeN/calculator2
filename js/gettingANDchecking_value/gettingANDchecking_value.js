
const getValue = function() {
    const value = document.getElementById("value");
    if (value != null) {
      return value;
    } else {
        ExampleText.innerHTML = "Переменная не обнаружена";
    };
};

const getValue1 = function() {
    const value1 = document.getElementById("value_1");
    if (value1 != null) {
      return value1;
    } else {
        ExampleText.innerHTML = "Перваая переменная не обнаружена";
    };
};
  
const getValue2 = function() {
    const value2 = document.getElementById("value_2");
    if (value2 != null) {
      return value2;
    } else {
        ExampleText.innerHTML = "Вторая переменная не обнаружена"; 
    };
};

const checkNumberValue = (val) => {
    var value = Number(val);
   return isNaN(value);
};
  
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
      string = "notFalse_True";
    }
    return string;
};

var forSimpleOperationWhithNumber = () => {
    const v1 = getValue1().value;
    if (checkNumberValue(v1)) {
        ExampleText.innerHTML = ('Первая переменная должна быть числом');
        result.innerHTML = ('Ошибка');
      return;
    }
    const v2 = getValue2().value;
    if (checkNumberValue(v2)) {
        ExampleText.innerHTML = ('Вторая переменная должна быть числом');
        result.innerHTML = ('Ошибка');
      return;
    }
    return ((ExampleText.innerHTML = ('Проблем нет')), (v1_value = parseInt(v1)), (v2_value = parseInt(v2)));
};
   
var forOperationWhithArray = () => {
  
   const v1 = getValue1().value;
   const v2 = getValue2().value;
   var FIRSTmassive1 = v1.split(",");
   var FIRSTmassive2 = v2.split(",");
   
    if (FIRSTmassive1.some(checkNumberValue)) {
        ExampleText.innerHTML = ('Первая переменная должна содержать только числа');
        result.innerHTML = ('Ошибка');
      return;
    };
    if (FIRSTmassive2.some(checkNumberValue)) {
        ExampleText.innerHTML = ('Вторая переменная должна содержать только числа');
        result.innerHTML = ('Ошибка');
      return;
    }; 
  
    return ((ExampleText.innerHTML = ('Проблем нет')), (massive1 = ArrayValueIntoNumber(FIRSTmassive1)), (massive2= ArrayValueIntoNumber(FIRSTmassive2)));
};
  
var forOperationWhithString = () => {
    return ((v1= getValue1().value), (v2= getValue2().value))
};
  
var forOperationWhithFalseandTrue = () => {
    const v = getValue().value;
    value_Boolean = StringValueIntoBoolean(v);

    if (value_Boolean == "notFalse_True") {
        ExampleText.innerHTML = ('Переменная должна быть false or true');
        result.innerHTML = ('Ошибка');
      return;
    };

   return ((ExampleText.innerHTML = ('Проблем нет')), (value_Boolean));
};

document.addEventListener("DOMContentLoaded", () => {

    const val = getValue1();
    if (val) {
      val.addEventListener('change', (event) => {
        console.log(event);
      })
    }
    
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
  