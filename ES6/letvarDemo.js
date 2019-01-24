var a =100;

function demo()
{
document.write("Global Var a value from Demo : " + a +"  ");

for(var i =0 ;i<10;i++)
{
document.write(i);
}

document.write(i);

}


function Demo2()
{
    document.write("Global Var a value from Demo : " + a);
}
demo();
Demo2();
