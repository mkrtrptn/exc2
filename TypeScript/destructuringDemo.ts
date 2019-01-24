var cities:string[] = ["banglore " , "hyd" , "Mumbai","Delhi"];

var[city1,city2] = cities;
console.log("City 1 " + city1 +"city2" + city2);

var[city1,...others] = cities;
console.log("All : " + others);

//destructuring merge array into single array

var mobiles:string[] = ["IPHONE","HTC","HUWAI","MOTOROLA","SAMSUNG","MI"]
var laptops:string[] = ["DELL","MAC","LENOVO","ASUS","HP","ACER"]

var products:string[] = [...mobiles,...laptops]
console.log(products);