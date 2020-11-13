// Objects

var cars = [];
function Cars(Brand, Model, Year) {
  this.Brand = brand;
  this.Model = model;
  this.Year = year;
  this.greeting = function () {
    return "Brand: " + this.Brand + "Model: " + this.Model + "Year: " + this.Year;
  }
}
cars.push(new Cars("Opel", "Astra", 2001));
car.push(new Cars("Ford", "Fiesta", 2008));
car.push(new Cars("Fiat", "500", 2011));

for (var index = 0; index < Cars.length; index++){
  var Cars = Cars[index];
  console.log(car.greeting());
}