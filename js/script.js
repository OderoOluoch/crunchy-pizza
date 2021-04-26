function Pizza(size,crust,topping){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = (parseInt(this.size) + parseInt(this.crust) + parseInt(this.topping) )
}
function PizzaOrder(){
    this.pizza = [];
}