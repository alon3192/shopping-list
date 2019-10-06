import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(public dataService:DataService) { }
  addMode = false;
  searchMode = false;
  
  categoryToAdd
  nameToAdd;
  amountToAdd;

  incorrectInput = false;

  categorySearch;
  nameSearch;


  ngOnInit() {
  }

  viewOptionlaToAdd()
  {
    this.addMode = true;
    this.searchMode = false;
  }
  viewOptionlaToSearch()
  {
    this.searchMode = true;
    this.addMode = false;
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
    }
    
  }

  toSearch()
  {
    this.dataService.searchProduct(this.categorySearch, this.nameSearch)
  }

}
