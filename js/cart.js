var c = 0;
document.getElementById("value").innerText = c;

function increment() {
  c += 1;
  document.getElementById("value").innerText = c;
  updateItemPrice();
}

function decrement() {
  if (c > 0) {
    c -= 1;
    document.getElementById("value").innerText = c;
    updateItemPrice();
  }
}

function updateItemPrice() {
  var itemPriceElement = document.getElementById("summary-price");
  var originalPrice = 20.00; 
  var shippingCost = 4.99; 
  var totalCost=document.getElementById('summary-item')
  totalCost.innerText=(originalPrice*c+shippingCost).toFixed(2)
//   var totalCost = originalPrice + shippingCost * c;

  itemPriceElement.innerText = "$" + originalPrice*c+".00";
}

function reset() {
  c = 0;
  document.getElementById("value").innerText = c;
  updateItemPrice();
}
