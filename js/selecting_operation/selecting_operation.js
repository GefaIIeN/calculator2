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
$("#title_selectedOperation").html("");
var  ExampleText = document.getElementById("text_forExample");
var  result = document.getElementById("result");


const resetOperation = () => {
  return ((result.innerHTML = ''), (ExampleText.innerHTML = ('Проверяем...')), ($("#value").html("")), ($("#value_1").html("")), ($("#value_2").html("")))
};

 
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

      $("#title_selectedOperation").html(selectedOperation);

      var Elem1 = document.getElementById('input_value_forNumbers');
      var Elem2 = document.getElementById('input_value_forBoolean');

      switch (selectedOperation) {
        case OperationType.PLUS: {
        return ((Elem1.classList.add('showFields')), (Elem2.classList.remove('showFields')), (resetOperation()));
        }
        case OperationType.MINUS: {
        return ((Elem1.classList.add('showFields')), (Elem2.classList.remove('showFields')), (resetOperation()));
        }
        case OperationType.DIV: {
        return ((Elem1.classList.add('showFields')), (Elem2.classList.remove('showFields')), (resetOperation()));
        }
        case OperationType.MULT: {
        return ((Elem1.classList.add('showFields')), (Elem2.classList.remove('showFields')), (resetOperation()));
        }
        case OperationType.SUMString: {
        return ((Elem1.classList.add('showFields')), (Elem2.classList.remove('showFields')), (resetOperation()));
        }
        case OperationType.SUMArray: {
        return ((Elem1.classList.add('showFields')), (Elem2.classList.remove('showFields')), (resetOperation()));
        }
        case OperationType.Rejection : {
        return ((Elem1.classList.remove('show')), (Elem2.classList.add('show')), (resetOperation()));
        }
      };
};
  

var Elem3 = document.getElementById('input_value');

const transitionTOgettingANDchecking = () => {

  if (selectedOperation === undefined) {
    selectedOperationElem.innerText = ('Выберите операцию');
  };

  if (Elem3.classList.contains('hideFields')) {
    Elem3.classList.remove('hideFields');
    Elem3.classList.add('showFields');
    firstGOnext.innerText = "Скрыть";
  } else {
    Elem3.classList.toggle('showFields');
    Elem3.classList.toggle('hideFields');
    firstGOnext.innerText = "Далее";
  };  

    document.addEventListener("DOMContentLoaded", () => {
      transitionTOgettingANDchecking();
      handleClickOperation();
    });
};
