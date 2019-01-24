class person
{
    private _name:string;
    private _age:number;

    constructor(name:string,age:number)
    {
     this._name=name;
     this._age=age;
    }

    display()
    {
     console.log(`Name : ${this._name} Age : ${this._age}`);
    }

}

class customer extends person
{
private _custID:number;

constructor(custID:number,name:string,age:number)
{
    super(name,age);
    this._custID=custID;
}

display()
{
console.log(`CustID : ${this._custID}`);    
super.display();
}
}

class employee extends person
{
private _eID:number;
constructor(eid:number,name:string,age:number)
{
super(name,age);
this._eID=eid;
}

display()
{
console.log(`Employee Id : ${this._eID}`);
super.display();
}


}





var obj:customer = new customer(101,"Muktar" , 25 );
obj.display();

var eobj:employee = new employee(102,"MP",25);
eobj.display();

//Creating Parent class object
var pobj:person = new person("Muku",25);
pobj.display();