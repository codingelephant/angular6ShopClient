import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
var toastr = require('toastr');
declare var toastr;
declare var window:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user:any;
  constructor(private authSvc: AuthService,
              private router: Router) {
     this.user = {
     };
   }

  ngOnInit() {

  }

  onSignupFormSubmit(form){
    if(!form.valid){
      alert("Form validation errors!");
    }
   // console.log(form.value);

   console.log(this.user);

   this.authSvc.register(this.user).subscribe( (res:any) =>{
          console.log(res);
          if(res.user){
           // this.router.navigate(["/"]);
           window.location = "/";
          }else{
            toastr.warning(res.message);
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
