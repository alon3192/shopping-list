import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../data-storage.service';


@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  subscription:Subscription

   products:Product[] = [];
  editMode: boolean = false;
  productToEdit:Product

  constructor(public dataService:DataService, private dataStorageService:DataStorageService) { }

  ngOnInit() {
    
    this.subscription = this.dataService.productsChanged.subscribe(
      (products: Product[]) => {
        this.products = products
      }
    );

    this.subscription = this.dataService.editModeChanged.subscribe(
      (editMode:boolean)=>{
        this.editMode = editMode;
      }
    )
   

    this.products = this.dataService.getProducts();
  }

  editProduct(product:Product)
  {
    this.editMode = true;
    this.productToEdit = product
    this.dataService.setEditProduct(product);
  }

  deleteProduct(product:Product)
  {
    this.dataService.deleteProduct(product);
    this.editMode = false;
    this.dataStorageService.storageProducts();
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }


}
