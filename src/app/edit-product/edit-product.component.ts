import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(public dataService:DataService, private DataStorageService:DataStorageService) { }
  editProduct:Product;
  subscription:Subscription;

  nameEdit
  categoryEdit
  amountEdit

  incorrectInput = false;



  ngOnInit() {

    this.subscription = this.dataService.editProductChanged.subscribe(
      (product: Product) => {
        this.editProduct = product;
        this.setFields();
        console.log(this.editProduct)
      }
    );

    this.editProduct = this.dataService.getEditProduct();
    

    this.setFields();
    
  }
  editAgreed()
  {
    //console.log(typeof(this.amountEdit) ,typeof(this.categoryEdit))
    if(this.categoryEdit === '' || this.nameEdit === '' || this.amountEdit === null || this.amountEdit < 1)
    {
      this.incorrectInput = true;
    }
    else
    {
      this.incorrectInput = false;
      var toEdit = new Product(this.categoryEdit, this.nameEdit, this.amountEdit);
      this.dataService.updateProduct(this.editProduct, toEdit);
      this.DataStorageService.storageProducts();
    }
   
  }

  setFields()
  {
    this.categoryEdit = this.editProduct.category;
    this.nameEdit = this.editProduct.name;
    this.amountEdit = this.editProduct.amount;
  }


  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }


}
