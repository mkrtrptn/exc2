class student
{
constructor()
{
this.studId=101;
this.studName = "Emma";
}

Display()
{
console.log(`Studnt Id : ${this.studId} Student Name : ${this.studName}`);
}

SetRecord(id,Name)
{
this.studId=id;
this.studName=Name;
}

}



var a= new student();
a.Display();
a.SetRecord(121,"Andrew");
a.Display();