import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../product.model';
import { DataService } from '../data.service';
import { DataStorageService } from '../data-storage.service';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(public dataService:DataService, private cd: ChangeDetectorRef, private dataStorageService:DataStorageService) { }
  addMode = false;
  searchMode = false;
  
  categoryToAdd
  nameToAdd;
  amountToAdd;

  incorrectInput = false;

  categorySearch;
  nameSearch;

  agreePushed = false;


  ngOnInit() {
    if(this.incorrectInput) { this.addMode = false; }
  }

  viewOptionlaToAdd()
  {
    this.agreePushed = false;
    this.addMode = !this.addMode;
    this.searchMode = false;
  }
  viewOptionlaToSearch()
  {
    this.searchMode = !this.searchMode;
    this.addMode = false;
    this.incorrectInput = false;
  }

  onAddProduct()
  {
    if(this.categoryToAdd === '' || this.nameToAdd === '' || this.amountToAdd === undefined || this.amountToAdd === null || this.amountToAdd < 1)
    {
      this.incorrectInput = true;
    }
    else
    {
      var newProduct:Product = new Product(this.categoryToAdd, this.nameToAdd, this.amountToAdd);
      this.dataService.addProduct(newProduct);
      this.incorrectInput = false;
      this.agreePushed = true;
      this.dataStorageService.storageProducts();
    }
    
  }

  toSearch()
  {
    this.dataService.searchProduct(this.categorySearch, this.nameSearch);
  }

  disapperaMode()
  {
    if(this.agreePushed)
    {
      setTimeout(() => {
        this.addMode = false;
        this.categoryToAdd = '';
        this.nameToAdd = '';
        this.amountToAdd = '';
    },1000);

      return "add_product_disappear_animation";
    }
  }

  


}
