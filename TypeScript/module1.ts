/*export*/ var pi:number =3.14;
/*export*/ function Display()
{
console.log("Display Function Message from module 1 ");
}

/*export*/ class student
{
    DisplayStudent()
    {
     console.log("From module1 Student Name : MP" );
    }
}

export {pi,Display,student} //Single Export