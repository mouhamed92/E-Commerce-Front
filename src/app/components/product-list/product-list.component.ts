import { Component, OnInit } from '@angular/core';
import {Product} from '../../common/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] ;

  constructor(private listeService : ProductService) { }

  ngOnInit() {
    this.listProduct() ;
  }

  private listProduct() {
      this.listeService.getProductList().subscribe(
        data => {
          this.products = data ;
        }
      )
  }
}
