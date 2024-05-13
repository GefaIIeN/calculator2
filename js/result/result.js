
$("#executeBtn").click(function executeOperation() { 

  console.log (selectedOperation);

    switch (selectedOperation) {

        case OperationType.PLUS: {
         $("#result").html(OperationPlus.execute());
        }
        case OperationType.MINUS: {
          $("#result").html(OperationMinus.execute());
        }
        case OperationType.DIV: {
          $("#result").html(OperationDivide.execute());
        }
        case OperationType.MULT: {
          $("#result").html(OperationMultiply.execute());
        }
        case OperationType.SUMString: {
          $("#result").html(OperationPlusString.execute());
        }
        case OperationType.SUMArray: {
          $("#result").html(OperationPlusArray.execute());
        }
        case OperationType.Rejection : {
          $("#result").html(OperationBoolean.execute());
        }
    };

});
