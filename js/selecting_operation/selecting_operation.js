function Select() {

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
            $("#stringFields").show();
            $("#booleanFields").hide();
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

  console.log('create');

  this.init = () => {
      console.log('init');
      
      handleClickOperation();

      this.operationPlus = new OperationPlus();
      this.operationMinus = new OperationMinus();
      this.operationMultiply = new OperationMultiply();
      this.operationDivide = new OperationDivide();
      this.operationPlusArray = new OperationPlusArray();
      this.operationPlusString = new OperationPlusString();
      this.operationBoolean = new OperationBoolean();


      this.selectedOperation = this.operationPlus;

      this.selectedOperation.init();
      if (this.selectedOperation.setValues()) {
          const res = this.selectedOperation.execute();
          console.log(res);
      };

      this.selectedOperation = this.operationMinus;

      this.selectedOperation.init();
      if (this.selectedOperation.setValues()) {
          const res = this.selectedOperation.execute();
          console.log(res);
      };

      this.selectedOperation = this.operationMultiply;

      this.selectedOperation.init();
      if (this.selectedOperation.setValues()) {
          const res = this.selectedOperation.execute();
          console.log(res);
      };

      this.selectedOperation = this.operationDivide;

      this.selectedOperation.init();
      if (this.selectedOperation.setValues()) {
          const res = this.selectedOperation.execute();
          console.log(res);
      };

      this.selectedOperation = this.operationPlusArray;

      this.selectedOperation.init();
      if (this.selectedOperation.setValues()) {
          const res = this.selectedOperation.execute();
          console.log(res);
      };

      this.selectedOperation = this.operationPlusString;

      this.selectedOperation.init();
      if (this.selectedOperation.setValues()) {
          const res = this.selectedOperation.execute();
          console.log(res);
      };

      this.selectedOperation = this.operationBoolean;

      this.selectedOperation.init();
      if (this.selectedOperation.setValues()) {
          const res = this.selectedOperation.execute();
          console.log(res);
      };
  }
}

window.App = new Select();