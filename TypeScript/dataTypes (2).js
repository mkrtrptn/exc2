var empno = 1112;
var ename = "Emma";
var info;
info = [122, "Garfield"];
var weekdays;
(function (weekdays) {
    weekdays[weekdays["Sunday"] = 0] = "Sunday";
    weekdays[weekdays["Monday"] = 1] = "Monday";
    weekdays[weekdays["Tuesday"] = 2] = "Tuesday";
})(weekdays || (weekdays = {}));
var dayindex = weekdays.Sunday;
var dayvalue = weekdays[0];
console.log("Sunday Index Is : " + dayindex);
console.log("Day on th Index IS  : " + dayvalue);
console.log("Static No For EMP" + empno + "Static Name for EMP" + ename);
console.log("Id Is :" + info[0] + "Name Is :" + info[1]);
