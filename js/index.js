const OperationType = {
  PLUS: 'Сложение',
  MINUS: 'Вычитание',
  MULT: 'Умножение',
  DIV: 'Деление',
  SUMString: 'Сложение строк',
  SUMArray: 'Сложение массивов',
  Rejection: 'Отрицание значения'
};

function resetOperation() {
  $('#resetBtn').click( () => {
  $("#result").html("");
  $("#value_1").html("");
  $("#value_2").html("");
  });
};

let selectedOperation = OperationType.PLUS;
$("#currentOper").html(selectedOperation);

function handleClickOperation () {
      $('#plus').on('click', (e) => {
        selectedOperation = OperationType.PLUS;
        $("#currentOper").html(selectedOperation);
        $("#numberFields").show();
        $("#stringFields").hide();
        $("#booleanFields").hide();
        resetOperation();

      });

      $('#minus').on('click', (e) => {
        selectedOperation = OperationType.MINUS;
        $("#currentOper").html(selectedOperation);
        $("#numberFields").show();
        $("#stringFields").hide();
        $("#booleanFields").hide();
        resetOperation();
      });

      $('#multiply').on('click', (e) => {
        selectedOperation = OperationType.MULT;
        $("#currentOper").html(selectedOperation);
        $("#numberFields").show();
        $("#stringFields").hide();
        $("#booleanFields").hide();
        resetOperation();
      });

      $('#divide').on('click', (e) => {
        selectedOperation = OperationType.DIV;
        $("#currentOper").html(selectedOperation);
        $("#numberFields").show();
        $("#stringFields").hide();
        $("#booleanFields").hide();
        resetOperation();
      });

      $('#plusString').on('click', (e) => {
        selectedOperation = OperationType.SUMString;
        $("#currentOper").html(selectedOperation);
        $("#numberFields").hide();
        $("#stringFields").hide();
        $("#booleanFields").show();
        resetOperation();
      });

      $('#plusArray').on('click', (e) => {
        selectedOperation = OperationType.SUMArray;
        $("#currentOper").html(selectedOperation);
        $("#numberFields").show();
        $("#stringFields").hide();
        $("#booleanFields").hide();
        resetOperation();
      });

      $('#boolOper').on('click', (e) => {
        selectedOperation = OperationType.Rejection;
        $("#currentOper").html(selectedOperation);
        $("#numberFields").hide();
        $("#stringFields").hide();
        $("#booleanFields").show();
        resetOperation();
      });
};



document.addEventListener("DOMContentLoaded", () => {
  handleClickOperation();
})