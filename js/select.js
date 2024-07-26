function Select(app) {
  this.app = app;

  this.operations = {};
  this.operations[this.app.OperationType.Plus] = new OperationPlus();
  this.operations[this.app.OperationType.Minus] = new OperationMinus();
  this.operations[this.app.OperationType.Mult] = new OperationMultiply();
  this.operations[this.app.OperationType.Div] = new OperationDivide();
  this.operations[this.app.OperationType.SumString] = new OperationPlusString();
  this.operations[this.app.OperationType.SumArray] = new OperationPlusArray();
  this.operations[this.app.OperationType.Rejection] = new OperationBoolean();
  this.operations[this.app.OperationType.Average] = new OperationAverage();

  this.jqResetBtn = $('#resetBtn');
  this.jqExecuteBtn = $("#executeBtn");
  this.jqResult = $('#result');
  this.jqNumberValue_1 = $('#NumberValue_1');
  this.jqNumberValue_2 = $('#NumberValue_2');
  this.jqStringValue_1 = $('#StringValue_1');
  this.jqStringValue_2 = $('#StringValue_2');
  this.jqBooleanValue_1 = $('#BooleanValue_1');
  this.jqNumberFields = $('#numberFields');
  this.jqStringFields = $('#stringFields');
  this.jqBooleanFields = $('#booleanFields');

  
  this.jqMultiFields = $('#multiFields');
  this.jqMultiFieldBlank = this.jqMultiFields.find('.numberBlankField');

  this.jqPlus = $('#plus');
  this.jqMinus = $('#minus'); 
  this.jqMultiply = $('#multiply');
  this.jqDivide = $('#divide');
  this.jqPlusString = $('#plusString');
  this.jqPlusArray = $('#plusArray');
  this.jqBoolOper = $('#boolOper');
  this.jqAverage = $('#average');


  this.activeOperation = null;

  this.reset = () => {
    $('.groupSpecClass').find("input").val('');
  }

  this.changeOperation = (newSelectedOperation) => {
      this.selectedOperation = newSelectedOperation;
      $("#currentOper").html(this.selectedOperation);

      if ((this.selectedOperation == this.app.OperationType.Plus) ||
      (this.selectedOperation == this.app.OperationType.Minus) ||
      (this.selectedOperation == this.app.OperationType.Mult) ||
      (this.selectedOperation == this.app.OperationType.Div)) {
        this.jqNumberFields.show();
        this.jqStringFields.hide();
        this.jqBooleanFields.hide();
        this.jqMultiFields.hide();
      }

      if ((this.selectedOperation == this.app.OperationType.SumString) ||
      this.selectedOperation == this.app.OperationType.SumArray) {
        this.jqNumberFields.hide();
        this.jqStringFields.show();
        this.jqBooleanFields.hide();
        this.jqMultiFields.hide();
      }

      if (this.selectedOperation == this.app.OperationType.Rejection) {
        this.jqNumberFields.hide();
        this.jqStringFields.hide();
        this.jqBooleanFields.show();
        this.jqMultiFields.hide();
      }

      if (this.selectedOperation == this.app.OperationType.Average) {
        this.jqNumberFields.hide();
        this.jqStringFields.hide();
        this.jqBooleanFields.hide();
        this.jqMultiFields.show();
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
      this.changeOperation(this.app.OperationType.Plus)
    });
    this.jqMinus.click(() => {
      this.changeOperation(this.app.OperationType.Minus)
    });
    this.jqMultiply.click(() => {
      this.changeOperation(this.app.OperationType.Mult)
    });
    this.jqDivide.click(() => {
      this.changeOperation(this.app.OperationType.Div)
    });
    this.jqPlusString.click(() => {
      this.changeOperation(this.app.OperationType.SumString)
    });
    this.jqPlusArray.click(() => {
      this.changeOperation(this.app.OperationType.SumArray)
    });
    this.jqBoolOper.click(() => {
      this.changeOperation(this.app.OperationType.Rejection)
    });
    this.jqAverage.click(() => {
      this.changeOperation(this.app.OperationType.Average)
    });

    this.jqExecuteBtn.click(() => {
      console.log (this.selectedOperation);
      if (this.activeOperation.setValues(this.activeOperation.getValues())) {
        const res = this.activeOperation.execute();
        console.log(this.activeOperation.getValues());
        console.log(''+res);
        this.jqResult.text(''+res);
      } else {
        console.log('wrong value');
        console.log(this.activeOperation.getValues());
        console.log(this.activeOperation.setValues(this.activeOperation.getValues()))
        this.jqResult.html('wrong value');
      }
    });
       
    this.changeOperation(this.app.OperationType.Plus)
  }
}