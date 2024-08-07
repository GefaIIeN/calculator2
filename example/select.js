function Select(app) {
    this.app = app;
  
    this.operations = {};
   
    this.operations[this.app.OperationType.Average] = OperationAverage();
    this.operations[this.app.OperationType.Average] = OperationImage();
  
    this.jqResetBtn = $('#resetBtn');
    this.jqExecuteBtn = $("#executeBtn");
    this.jqResult = $('#result');
   
    this.jqAverageFields = $('#multiFields');
    this.jqImageFields = $('#imageFields')
    
    this.jqAverage = $('#average');
    this.jqImage = $('#imagePlus');
  
  
    this.activeOperation = null;

    this.changeOperation = (newSelectedOperation) => {
        this.selectedOperation = newSelectedOperation;
        $("#currentOper").html(this.selectedOperation);
  
        if ((this.selectedOperation == this.app.OperationType.Average)) {
          this.jqAverageFields.show();
          this.jqImageFields.hide();
        }
  
        if ((this.selectedOperation == this.app.OperationType.Image)) {
          this.jqAverageFields.hide(); 
          this.jqImageFields.show();
        }

        this.activeOperation = this.operations[this.selectedOperation];
        this.activeOperation.init();
    };

  
    this.init = () => {
      console.log('init');

      var index = 0;

      $('.addField').click(function(){
        let newInput = $(`#fieldValue`).eq(0).clone()
        newInput.id = `fieldValue_${index++}`
        $('.fieldValue').append(newInput);
        return false;
    });
    
    $('.removeField').click(function() {
        var allInputs = document.getElementById('#multiFields').querySelectorAll('input[type="text"]');
        totalInputs = allInputs.length;
        if (totalInputs > 1) {
            allInputs[totalInputs - 1].parentNode.removeChild(allInputs[totalInputs - 1]);
        }
    });

      this.jqAverage.click(() => {
        this.changeOperation(this.app.OperationType.Average)
      });
      this.jqImage.click(() => {
        this.changeOperation(this.app.OperationType.Image)
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
         
      this.changeOperation(this.app.OperationType.Average)
     }
    }