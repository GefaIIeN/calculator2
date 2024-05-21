function Select(app) {
  this.app = app;

  this.operations = {};
  this.operations[this.app.OperationType.Plus] = new OperationPlus();
  this.operations[this.app.OperationType.Minus] = new OperationMinus();
  this.operations[this.app.OperationType.Mult] = new OperationMultiply();
  this.operations[this.app.OperationType.Div] = new OperationDivide();
  this.operations[this.app.OperationType.SumString] = new OperationPlusArray();
  this.operations[this.app.OperationType.SumArray] = new OperationPlusString();
  this.operations[this.app.OperationType.Rejection] = new OperationBoolean();

  this.jqResetBtn = $('#resetBtn');
  this.jqExecuteBtn = $("#executeBtn");
  this.jqResult = $('#result');
  this.jqValue_1 = $('#value_1');
  this.jqValue_2 = $('#value_2');
  this.jqNumberFields = $('#numberFields');
  this.jqStringFields = $('#stringFields');
  this.jqBooleanFields = $('#booleanFields');
  
  this.jqPlus = $('#plus');
  this.jqMinus = $('#minus'); 
  this.jqMultiply = $('#multiply');
  this.jqDivide = $('#divide');
  this.jqPlusString = $('#plusString');
  this.jqPlusArray = $('#plusArray');
  this.jqBoolOper = $('#boolOper');


  this.activeOperation = null;

  this.reset = () => {
    this.jqResult.val("");
    this.jqValue_1.val("");
    this.jqValue_2.val("");
  }

  this.changeOpearion = (newSelectedOperation) => {
      this.selectedOperation = newSelectedOperation;
      $("#currentOper").html(this.selectedOperation);

      if ((this.selectedOperation == this.app.OperationType.Plus) ||
      (this.selectedOperation == this.app.OperationType.Minus) ||
      (this.selectedOperation == this.app.OperationType.Mult) ||
      (this.selectedOperation == this.app.OperationType.Div)) {
        this.jqNumberFields.show();
        this.jqStringFields.hide();
        this.jqBooleanFields.hide();
      }

      if ((this.selectedOperation == this.app.OperationType.SumString) ||
      this.selectedOperation == this.app.OperationType.SumArray) {
        this.jqNumberFields.hide();
        this.jqStringFields.show();
        this.jqBooleanFields.hide();
      }

      if (this.selectedOperation == this.app.OperationType.Rejection) {
        this.jqNumberFields.hide();
        this.jqStringFields.hide();
        this.jqBooleanFields.show();
      }

      this.activeOperation = this.operations[this.selectedOperation];
      this.activeOperation.init();

      this.reset();
  }

  this.init = () => {
    console.log('init');

    this.jqResetBtn.click(() => {
      this.reset();
    });

    this.jqPlus.click(() => {
      this.changeOpearion(this.app.OperationType.Plus)
    });
    this.jqMinus.click(() => {
      this.changeOpearion(this.app.OperationType.Minus)
    });
    this.jqMultiply.click(() => {
      this.changeOpearion(this.app.OperationType.Mult)
    });
    this.jqDivide.click(() => {
      this.changeOpearion(this.app.OperationType.Div)
    });
    this.jqPlusString.click(() => {
      this.changeOpearion(this.app.OperationType.SumString)
    });
    this.jqPlusArray.click(() => {
      this.changeOpearion(this.app.OperationType.SumArray)
    });
    this.jqBoolOper.click(() => {
      this.changeOpearion(this.app.OperationType.Rejection)
    });

    this.jqExecuteBtn.click(() => {
      console.log (this.selectedOperation);
      if (this.activeOperation.setValues(this.activeOperation.getValues())) {
        const res = this.activeOperation.execute();
        console.log(res);
        this.jqResult.html(res);
      } else {
        console.log('wrong value');
        this.jqResult.html('wrong value');
      }
    });
       
    this.changeOpearion(this.app.OperationType.Plus)
  }
}