
 class employee
{

private _empID:number;
private _ename:string;
private _sal:number;
private static _count:number;

constructor(eid:number,ename:string,sal:number)
{

this._empID=eid;
this._ename=ename;
this._sal=sal;
employee._count++;
}

incrementSal(amt:number=2000)
{
this._sal=this._sal+amt;
}

display()
{
    console.log(`Name : ${this._ename} Employee ID : ${this._empID} Salary :${this._sal} `);
}


public static count():number
{
return employee._count;
}


}

var emp1:employee = new employee(1,"mp",1000)
emp1.incrementSal();
emp1.display();


var emp2:employee=new employee(2,"Emma" , 1000);
emp2.incrementSal(5000);
emp2.display();

console.log(" " + employee.count());

