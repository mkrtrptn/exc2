var names:string[] = ["Mp","Emma","Nicola"];
var [name1,name2] = names;
console.log(name1,name2);

//... Example
var[name1,...others] = names;
console.log(name1,others);

//Array Of Array

var arr:string[] = ["mp","muktar","Emma"];
var arr2:number[] = [1,2,3,4];

var complete:any =[...arr,...arr2]
console.log(complete); 