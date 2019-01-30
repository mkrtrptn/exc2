import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import{ LoginComponent } from './login.component';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmguardService implements CanDeactivate<LoginComponent>
{

constructor(){}

canDeactivate(login:LoginComponent):boolean
{

if(login.myform.invalid)
{
  return window.confirm('Do You Want To Discard Changes .');
}
else
{
return true;
}

}
}
