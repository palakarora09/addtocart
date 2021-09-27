var cartItems = [];
var isTotalHidden = true;

var backpack = {
 name: "Backpack",
 price: 400
}

var camera = {
 name: "Camera",
 price: 300
}

function addToCart(item) {
 cartItems.push(item);
 document.getElementById("itemCounter").innerHTML = cartItems.length;
 showTotal();
}

function clickCart( ) {
 isTotalHidden = !isTotalHidden;
 showTotal();
}

function showTotal( ) {
 var orderTotal = document.getElementById("orderTotal");
 var shippingTotal = document.getElementById("shippingTotal");

 orderTotal.innerHTML = "";
 shippingTotal.innerHTML = "";
 
 if (isTotalHidden === false) {
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
   total += cartItems[i].price;
  }
  var shipping = calculateShipping(total);
  orderTotal.innerHTML += "Total: $" + total;
  shippingTotal.innerHTML += "Shipping: $" + shipping;
 }
}

function calculateShipping(total) {
 var shipping;
 if (total >= 700) {
  shipping = 30
 } else {
   shipping = 50
 }
 return shipping;
}