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
    $("form#order").submit(function(event) {
        event.preventDefault();
        var inputtedSizePrice = $("#pizzaSize").val();
        var inputtedCrustPrice = $("#pizzacrust").val();
        var inputtedToppingPrice = $("#pizzaToppings").val();
        var pickedPizza = new Pizza(inputtedSizePrice,inputtedCrustPrice,inputtedToppingPrice)
        var placedOrder = new PizzaOrder()
        placedOrder.pizza.push(pickedPizza)
        deliveryOrder.pizza.push(pickedPizza)
        resetFields();
        $("#toHide").show();
        placedOrder.pizza.forEach(function(pickedPizza){
        $("#PizzaDisplay").append(`<tr>
                <th scope="row">${genRandId()}</th>
                <td>${pickedPizza.getSize(pickedPizza.size)}</td>
                <td>${pickedPizza.getCrust(pickedPizza.crust)}</td>
                <td>${pickedPizza.getToppings(pickedPizza.topping)}</td>
                <td>${pickedPizza.getTotal()}</td>
          </tr>`);
        }) 
    });

    $( "#target" ).click(function() {
        $("#alsoToHide").show()
        $("#message").hide()
        $("#target").hide()
        $("#stayLocation").hide()
        $("#track").append(`<strong>${genOderId()}</strong>`)
        $("#total").append(`<strong>${getGrandTotal()}</strong>`)
      });
    
      $("#delivery").click(function(){
        $("#stayLocation").show()
        alert("I have been licked ")
        var total=  $("#total").val()
        console.log(total)
        console.log(`Your Grand Total is ${parseInt(total) + 200}`)
    });



    $("#nodeli").click(function(){

    });

})