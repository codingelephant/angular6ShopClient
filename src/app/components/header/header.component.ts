import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'helloAngular6';

  constructor(public auth: AuthService,
    public cartSvc: CartService,
    public router: Router){

  }

  onLogout(e){
  //  alert("logout");
  var confm = confirm("Are you sure to logout ?");
  if(confm){
    this.auth.logOut().subscribe(res=>{
      this.router.navigate(["/signin"]);
    });
  }
   
  }
  
}
