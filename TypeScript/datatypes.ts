var empno:number=50;
var ename:string = "Raju";

//Tuple
var studentInfo:[number,string]
studentInfo=[101,"Ram"];
studentInfo=[102,"Rakesh"];

enum weekdays{
	SUNDAY,MONDAY,TUESDAY,WEDNSDAY,THURSDAY,FRIDAY,SATURDAY }

var w:weekdays =weekdays.WEDNSDAY;
var s:string = weekdays[4];

console.log("Emp NO : " + empno);
console.log("Emp Name : " + ename);
console.log("Day" + w);
console.log("Day :"+ s );
console.log("Roll No :" + studentInfo[0] + "Name :" + studentInfo[1]);