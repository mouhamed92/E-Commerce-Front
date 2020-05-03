import { Component, OnInit } from '@angular/core';
import {Product} from '../../common/product';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] ;
  currentId : number ;

  constructor(private listeService : ProductService,
              private route :ActivatedRoute) { }

  ngOnInit() {
     this.route.paramMap.subscribe(()=>{
       this.listProduct() ;
     });
  }

  private listProduct() {

    const hasCategorie: boolean = this.route.snapshot.paramMap.has('id') ;

    if(hasCategorie){
      this.currentId = + this.route.snapshot.paramMap.get('id') ;
    }else {
      this.currentId = 1 ;
    }
      this.listeService.getProductList(this.currentId).subscribe(
        data => {
          this.products = data ;
        }
      )
  }
}
