function Application() {
    this.OperationType = {
        Average: 'Среднее арифметическое',
        Image: 'Сложение изображений'
    };
  
    this.select = new Select(this);
  
    this.init = () => {
        this.select.init();
    }
}