interface IDraw
{
    area();
}

class Circle implements IDraw
{

constructor(private radius:number)
{

}

area()
{
var res = 3.14 * this.radius;
console.log(`Area Of Circle Is : ${res}`);
}

}

class Rectangle implements IDraw
{

constructor(private length:number,private width:number)
{

}

area()
{
var res =this.length * this.width;
console.log(`Area Of Rectangle Is : ${res}`);


}
}


var Cobj:Circle = new Circle(12);
Cobj.area();

var Robj:Rectangle = new Rectangle(14,25);
Robj.area();

