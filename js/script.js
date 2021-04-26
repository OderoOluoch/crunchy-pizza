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
var reset = function(){
    location.reload();
} 

Pizza.prototype.getSize = function(size){
    if(size==="600"){
        return `Small - ${this.size}`
    }else if(size==="900"){
        return `Medium - ${this.size}`
    }else if(size==="1200"){
        return `Large - ${this.size}`
    }   
}

Pizza.prototype.getCrust = function(crust){
    if(crust==="150"){
        return `Cripsy - ${this.crust}`
    }else if(crust==="175"){
        return `Stuffed - ${this.crust}`
    }else if(crust==="200"){
        return `Gluten Free - ${this.crust}`
    } 
}

Pizza.prototype.getToppings = function(topping){
    if(topping==="225"){
        return `Pepperoni - ${this.topping}`
    }else if(topping==="245"){
        return `Mushrooms - ${this.topping}`
    }else if(topping==="265"){
        return `Gorgonzola - ${this.topping}`
    } 
}

Pizza.prototype.getTotal = function(){
    return this.total
}



var deliveryOrder = new PizzaOrder()
var sum =0;

function getGrandTotal(){
    for(let i =0; i < deliveryOrder.pizza.length; i++){
        sum += deliveryOrder.pizza[i].total
    }
    return sum;
} 

$(document).ready(function(){
    $("#toHide").hide();
    $("#alsoToHide").hide();
    $("#stayLocation").hide()
    $("#message").hide()
})