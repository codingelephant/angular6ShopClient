import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
declare var require:any;
var toastr = require('toastr');

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
  constructor(public productSvc: ProductsService,
  public cartSvc: CartService) { 
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

 addToCart(product){
  // alert("Added to cart!");
   console.log(product);
   this.cartSvc.add(product);
   toastr.warning('Successfully added to the cart!');
 }

  ngAfterViewInit(){
    
  }

}
