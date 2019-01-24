var cities =["Hyd", "Pune" , "Delhi" ,"Bangalore" , "Chennai"]

for(let i = 0 ; i<cities.length ; i++)
{
   document.write("City : " + cities[i]);
   console.log(cities[i]);
}

cities.forEach( p=>{

  document.write("City2 : " + p);  
});

for(let j of cities)
{
   document.write("City3" + j);
}