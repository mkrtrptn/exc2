import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ObDemoMyservice } from '../ob-demo-myservice';


@Component({
  selector: 'app-ob-demo-component',
  templateUrl: './ob-demo-component.component.html',
  styles: []
})


export class ObDemoComponentComponent implements OnInit,OnDestroy 
{
obj:ObDemoMyservice;
value:any = "";
referance:any;
result:any;

constructor()
{
this.obj=new ObDemoMyservice();
}

ngOnInit()
{

this
.referance =this.obj.myobservable.subscribe(

(res)=>
{
this.value = this.value + res + " ";
},

(err)=>
{
this.value="Error";
},

()=>
{
this.value = this.value + "Completed ";
})

}

  ngOnDestroy()
{
    this.referance.unsubscribe();
  }
  
  m1()
  {
   
   this.result=this.referance.value;
  }


}
