//Functions

function area(length, width) {
  return length * width;
}
var area1 = area(25, 15);
console.log(area); 
// Push form
function area(length, width) {
  return length * width;
}
var circleAreas = []
circleAreas.push(area(25, 15));
circleAreas.push(area(27, 12));
circleAreas.push(area(30, 20));

console.log(circleAreas);

//

var bankBalance = 650;

function bankBalance() {
  if (sellPrice <= bankBalance) {
    bankBalance -= sellPrice;
    console.log("Payment Sucessful");
  } else {
    ("Inufficient Founds")
  }
}
console.log(bankBalance);
makePurchase(70.00);

console.log(bankBalance);
makePurchase(29.99);

console.log(bankBalance);
makePurchase(10.00);

console.log(bankBalance);
makePurchase(525.30);
var transaction = function bankBalance() {
  if (sellPrice <= bankBalance) {
    bankBalance -= sellPrice;
    console.log("Payment Sucessful");
  } else {
    ("Inufficient Founds")
  }
};
transaction(25);
// 

var printCustomerName = function (first, last) {
  console.log("First Name: " + first + " Last Name: " + last);
}
var applyCreditCard = function (CreditStore, soul) {
} //use some function //

var bankOperations = [];
bankOperations.push(applyCreditCard);
bankOperations.push(printCustomerName);
bankOperations.push(transaction);
// Store the data from the functions .