$(document).ready(function(){
    var multiFields = $('#multiFields');
    var multiFieldBlank = multiFields.find('.numberBlankField');
    var inputCounter = 1;
    var res = $('#result');
    var executeBtn = $('#executeBtn');
    values = [];
    

    multiFields.find('.addField').click(()=>{
    const allFields = multiFields.children('div').filter((i, elem) => {
      return $(elem).attr('class') != 'numberBlankField';
    }).length;
    
    inputCounter++;
    console.log(inputCounter)
    const jqNewField = multiFieldBlank.clone();
    const newField = jqNewField.get(0);
    multiFields.append(newField);
    const idField = 'numberField_'+allFields;
    newField.id = idField;
    jqNewField.removeClass('numberBlankField');

    jqNewField.children('.removeField').click(() => {
      jqNewField.remove();
      inputCounter--;
      console.log(inputCounter)
    });

    jqNewField.children('.clearField').click(() => {
        console.log ( $(this).find("input").val())
        $('div.numberBlankField').find("input").val('') 

      });

  });

  executeBtn.click(() => {
        getValues = () => {
              values = [... multiFields.find('input')].map(v => v.value);
              const numValue = values.map(el=>parseInt(el));
            return numValue  
        }

        execute = () => {
            values = getValues();
            console.log (values);
            if (inputCounter > 1) {
                const sum = values.reduce((acc, number) => acc + number, 0);
                const length = inputCounter;
                console.log (sum);
                console.log (length);
                return console.log(sum / length);
            }

        }
     return res = execute();
  });

});