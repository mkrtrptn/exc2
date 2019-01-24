class employee
{
    
private _id:number;
private _name:string;
private _da:number;
private _sal:number;

constructor(id:number,name:string)
{
this._id=id;
this._name=name;

}

public set sal(sal:number)
{
    this._sal=sal;
    this._da= sal*0.3;
}

public get sal():number
{

    return this._sal;
}

display()
{
    console.log(`ID : ${this._id} Name : ${this._name} Sal :${this._sal}`);
}

}

var obj:employee = new employee(101,"Muktar");
obj.sal=5000;
obj.display();
obj.sal = obj.sal+5000;
console.log(obj.sal);
