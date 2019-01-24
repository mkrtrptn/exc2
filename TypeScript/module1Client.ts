//import { pi,Display ,student} from "./module1";
import * as NS1 from "./module1";
import * as NS2 from "./module2";
console.log(NS1.pi);
console.log(NS2.name);

NS1.Display();
NS2.Display();

var obj:NS1.student = new NS1.student();
obj.DisplayStudent();

var obj2:NS2.student = new NS2.student();
obj2.DisplayStudent();