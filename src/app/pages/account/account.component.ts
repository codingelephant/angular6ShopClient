import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
var toastr = require('toastr');
declare var toastr:any;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:any = {};
  constructor(public auth: AuthService) {

   }

  ngOnInit() {
    this.auth.getProfile().subscribe( (res:any) =>{
            if(res.user){
          this.user = res.user;
          this.user.password='';
            }
    });
  }

  onAccountFormSubmit(form){
    if(!form.valid){
      alert("Validation errors!");
    }

     console.log(this.user);

     this.auth.updateProfile(this.user).subscribe((res:any)=>{
       console.log(res);
       toastr.info('Successfully update your info!');
     });

  }

}
