var empno = 50;
var ename = "Raju";
//Tuple
var studentInfo;
studentInfo = [101, "Ram"];
studentInfo = [102, "Rakesh"];
var weekdays;
(function (weekdays) {
    weekdays[weekdays["SUNDAY"] = 0] = "SUNDAY";
    weekdays[weekdays["MONDAY"] = 1] = "MONDAY";
    weekdays[weekdays["TUESDAY"] = 2] = "TUESDAY";
    weekdays[weekdays["WEDNSDAY"] = 3] = "WEDNSDAY";
    weekdays[weekdays["THURSDAY"] = 4] = "THURSDAY";
    weekdays[weekdays["FRIDAY"] = 5] = "FRIDAY";
    weekdays[weekdays["SATURDAY"] = 6] = "SATURDAY";
})(weekdays || (weekdays = {}));
var w = weekdays.WEDNSDAY;
var s = weekdays[4];
console.log("Emp NO : " + empno);
console.log("Emp Name : " + ename);
console.log("Day" + w);
console.log("Day :" + s);
console.log("Roll No :" + studentInfo[0] + "Name :" + studentInfo[1]);
