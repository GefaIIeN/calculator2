function Application() {
  this.OperationType = {
      Plus: 'Сложение',
      Minus: 'Вычитание',
      Mult: 'Умножение',
      Div: 'Деление',
      SumString: 'Сложение строк',
      SumArray: 'Сложение массивов',
      Rejection: 'Отрицание значения',
      Average: 'Среднее арифметическое'
  };

  this.select = new Select(this);

  this.init = () => {
      this.select.init();

  }

}