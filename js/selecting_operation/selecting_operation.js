const OperationType = {
    PLUS: 'Сложение',
    MINUS: 'Вычитание',
    MULT: 'Умножение',
    DIV: 'Деление',
    SUMString: 'Сложение строк',
    SUMArray: 'Сложение массивов',
    Rejection: 'Отрицание значения'
};

var selectedOperation;
var selectedOperationElem = document.getElementById("title_selectedOperation");


function handleClickOperation (operation) {
      if (operation == '+') {
          selectedOperation = OperationType.PLUS
      } else if (operation == '-') {
          selectedOperation = OperationType.MINUS
      } else if (operation == '*') {
          selectedOperation = OperationType.MULT
      } else if (operation == '/') {
          selectedOperation = OperationType.DIV
      }  else if (operation == '+a') {
          selectedOperation = OperationType.SUMString
      }  else if (operation == '+123') {
          selectedOperation = OperationType.SUMArray
      }  else if (operation == 'not') {
          selectedOperation = OperationType.Rejection 
      };

      if (selectedOperationElem) {
        selectedOperationElem.innerText = selectedOperation;
      };

      switch (selectedOperation) {
        case OperationType.PLUS: {
        return (document.getElementById('input_value_forNumbers').style.display = "block", document.getElementById('input_value_forBoolean').style.display = "none")
        }
        case OperationType.MINUS: {
        return (document.getElementById('input_value_forNumbers').style.display = "block", document.getElementById('input_value_forBoolean').style.display = "none");
        }
        case OperationType.DIV: {
        return (document.getElementById('input_value_forNumbers').style.display = "block", document.getElementById('input_value_forBoolean').style.display = "none");
        }
        case OperationType.MULT: {
        return (document.getElementById('input_value_forNumbers').style.display = "block", document.getElementById('input_value_forBoolean').style.display = "none");
        }
        case OperationType.SUMString: {
        return (document.getElementById('input_value_forNumbers').style.display = "block", document.getElementById('input_value_forBoolean').style.display = "none");
        }
        case OperationType.SUMArray: {
        return (document.getElementById('input_value_forNumbers').style.display = "block", document.getElementById('input_value_forBoolean').style.display = "none");
        }
        case OperationType.Rejection : {
        return (document.getElementById('input_value_forNumbers').style.display = "none", document.getElementById('input_value_forBoolean').style.display = "block");
        }
      };
};
  

const transitionTOgettingANDchecking = () => {
  if (selectedOperation === undefined) {
  selectedOperationElem.innerText = ('Выберите операцию');
  document.getElementById('block').style.display = "none";
  }
    display = document.getElementById('input_value').style.display;
     if (display === "none") {
      document.getElementById('input_value').style.display = "block";
      document.getElementById('block').style.display = "block";
      firstGOnext.innerHTML = "Скрыть";
     } else {
      document.getElementById('input_value').style.display = "none";
      document.getElementById('block').style.display = "block";
      firstGOnext.innerHTML = "Далее";
     };  

    document.addEventListener("DOMContentLoaded", () => {
      transitionTOgettingANDchecking();
      handleClickOperation(OperationType.PLUS);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  handleClickOperation(OperationType.PLUS);
});


document.getElementById('input_value_forNumbers').style.display = "none"
document.getElementById('input_value_forBoolean').style.display = "none"