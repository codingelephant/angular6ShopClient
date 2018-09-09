import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
var toastr = require('toastr');
declare var toastr;
declare var window:any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   user:any = {
     phone:'',
     password:''
   };
  constructor(private authSvc: AuthService) { 

  }

  ngOnInit() {
  }

  onSigninFormSubmit(form){

    this.authSvc.login(this.user).subscribe(
      (res:any)=>{
      if(res.user && res.token){
       this.authSvc.saveUser(res.user,res.token);
       window.location ="/account";
       // this.router.navigate(["/account"]);
      }
    },
    (res:any)=>{
      if(res.error){
        console.log(res.error);
        toastr.warning(res.error.message.message);
      }
    });


  }

}
