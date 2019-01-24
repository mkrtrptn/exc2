var empno:number = 1112;
var ename:string = "Emma";

var  info : [number ,string]

info = [122,"Garfield"]

enum weekdays {"Sunday" , "Monday" , "Tuesday"}


var dayindex:weekdays = weekdays.Sunday;
var dayvalue:string = weekdays[0]
console.log("Sunday Index Is : " + dayindex);
console.log("Day on th Index IS  : " + dayvalue);
console.log("Static No For EMP" + empno + "Static Name for EMP" + ename );
console.log("Id Is :" + info[0] + "Name Is :" + info[1]);