class calculator
{
private _num1:number;
private _num2:number;
private _result:number;

constructor(a:number,b:number)
{
   this._num1=a;
   this._num2=b;
}

public add():number
{
this._result=this._num1+this._num2;    
return this._result;
}

sub():number
{
    this._result=this._num1-this._num2;
    return this._result;
}

}

var obj:calculator = new calculator(10,25);
console.log("Addition : " + obj.add()+"Substraction :"+ obj.sub());


