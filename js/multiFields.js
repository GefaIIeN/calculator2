$(() => {
    var multiFields = $('#multiFields');
    var multiFieldBlank = multiFields.find('.numberBlankField');
    var inputCounter = 1;
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

  });
  
});