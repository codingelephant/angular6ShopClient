import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
declare var window;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any = {};
  loading:Boolean = true;
  constructor(public prodSvc: ProductsService) {

   }

  ngOnInit() {
   let url = window.location.href;
   let id = url.split("/").pop();
   this.prodSvc.getOne(id).subscribe((res:any)=>{
          //console.log(res.product);
          this.loading = false;
          if(res.product){
          this.product = res.product;
          }

   },
  (res:any)=>{
    console.log("error fetching product");
  });

  }

}
