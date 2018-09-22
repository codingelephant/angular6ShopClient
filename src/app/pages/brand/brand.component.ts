import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  public brand:any = {};
  public products:any = [];
  constructor(public prodSvc: ProductsService) {

   }

  ngOnInit() {
    let url = window.location.href;
    let id = url.split("/").pop();
    this.prodSvc.getBrand(id).subscribe((res:any)=>{
      if(res.brand){
        this.brand = res.brand;
      }
    });

    this.prodSvc.getAll({brand:id}).subscribe((res:any)=>{
      if(res.products){
        this.products = res.products;
      }
    })

  }

}
