class c1
{
    m1()
    {
     console.log("Method m1");
    }

    m2()
    {
        console.log("Method M2");
        console.log("Second Statements Of method !");
    }
}

var obj:c1 = new c1();
obj.m1();
debugger;
obj.m2();