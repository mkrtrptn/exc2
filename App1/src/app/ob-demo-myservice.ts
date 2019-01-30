
import {Observable} from "rxJs";

export class ObDemoMyservice 
{
    
myobservable = new Observable((Observer)=>
{
Observer.next("Value1");
Observer.next("Value2");
Observer.complete();

});


}



