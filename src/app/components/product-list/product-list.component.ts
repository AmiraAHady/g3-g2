import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  constructor(private productServ:ProductService){}
  ngOnInit() {
     this.productServ.getAllProducts().subscribe((data)=>{
      console.log(data);
      
     })
  }
  

}
