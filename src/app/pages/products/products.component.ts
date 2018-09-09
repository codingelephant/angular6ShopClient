import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products:any;
  public query:any = {
    q:'',
    category:'',
    brand:'',
    min_price:'',
    max_price:''
  };
  p:number  = 1;
  loading:boolean = false;
  constructor(public productSvc: ProductsService) { 
   // this.products = this.productSvc.getAll();
  }

  onSearch(e){
    console.log(this.query);
   // alert("search");
    this.loadProducts();
  }

  ngOnInit() {
  this.loadProducts();
  }

  loadProducts(){
    //show loading
    this.loading = true;
    //reset products
    this.products = [];

  //promise , async-await , observable
  this.productSvc.getAll(this.query).subscribe( (data:any) => {
    //    let data:any = res;
        console.log(data.products);
        if(data.products){
        this.products = data.products;
        }
        this.loading = false;
});
  }



  ngAfterViewInit(){
    
  }

}
