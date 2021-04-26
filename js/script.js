function Pizza(size,crust,topping){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = (parseInt(this.size) + parseInt(this.crust) + parseInt(this.topping) )
}
function PizzaOrder(){
    this.pizza = [];
}

function resetFields() {
    var inputtedSizePrice = $("#pizzaSize").val("");
    var inputtedCrustPrice = $("#pizzacrust").val("");
    var inputtedToppingPrice = $("#pizzaToppings").val("");
}

function genRandId(){
    var rand = Math.floor(Math.random() * 77)
    return `#PIZZ${rand}-D`
}
function genOderId(){
    var rand = Math.floor(Math.random() * 88)
    return `#PZODR${rand}-D`
}