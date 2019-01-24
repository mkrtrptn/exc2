var cities = ["banglore ", "hyd", "Mumbai", "Delhi"];
var city1 = cities[0], city2 = cities[1];
console.log("City 1 " + city1 + "city2" + city2);
var city1 = cities[0], others = cities.slice(1);
console.log("All : " + others);
//destructuring merge array into single array
var mobiles = ["IPHONE", "HTC", "HUWAI", "MOTOROLA", "SAMSUNG", "MI"];
var laptops = ["DELL", "MAC", "LENOVO", "ASUS", "HP", "ACER"];
var products = mobiles.concat(laptops);
console.log(products);
