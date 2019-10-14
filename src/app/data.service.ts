import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService{

  constructor() { 
    
    this.orderArray();
     
  }

  

  productsChanged = new Subject<Product[]>();
  s="s"

  
  private basicList:Product[] = [
    new Product ("Beverages", "Cola", 1),
    new Product ("Milky", "Cheese", 2),
    new Product ("Milky", "Milk", 3),
    new Product ("Vegetables", "Cucumber", 8),
    new Product ("Vegetables", "Tomato", 9),
    new Product ("Snacks", "Chocolate", 2)
  ];
  
 private products:Product[] = [];
  
  
  editProduct:Product;
  editProductChanged = new Subject<Product>();
  editModeChanged = new Subject<boolean>();
  

  getProducts()
  {
    return this.products.slice();
  }
  setProducts(products:Product[])
  {
    this.products = products;
    this.productsChanged.next(this.products.slice())
  } 

  setEditProduct(product:Product)
  {
    this.editProduct = product;
    this.editProductChanged.next(this.editProduct);
  }
  getEditProduct()
  {
    return this.editProduct;
  }

  updateProduct(toFind:Product, toEdit:Product)
  {

    toEdit = this.fixInput(toEdit);

    for(var i=0 ; i<this.products.length ; i++)
    {
      if(this.products[i] === toFind)
      {
        this.products[i] = toEdit;
        break;
      }
    }
    this.orderArray();
    this.productsChanged.next(this.products.slice());
    this.editModeChanged.next(false);
    
    
    
  }

  orderArray()
  {
    this.products.sort((a, b) => {
      if(a.category > b.category) {
        return 1;
      } else if(a.category < b.category) {
        return -1;
      } else {
        /*return 0;*/
        if(a.name > b.name) {
          return 1;
        }
        else if(a.name < b.name) {
          return -1;
        }
      }
      return 0;
    });
  }

  fixInput(toEdit:Product)
  {
    console.log(toEdit)
    var category = toEdit.category
    var name = toEdit.name;
    var categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1);
    var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    
    return new Product(categoryCapitalized, nameCapitalized, toEdit.amount);

  }

  deleteProduct(product:Product)
  {
    for(var i=0 ; i<this.products.length ; i++)
    {
      if(this.products[i] === product)
      {
        this.products.splice(i,1);
        break;
      }
    }
    this.productsChanged.next(this.products.slice());
  }

  addProduct(product:Product)
  {
    product = this.fixInput(product)
    this.products.push(product);
    this.orderArray();
    this.productsChanged.next(this.products.slice());
  }

  searchProduct(categoryToSearch, nameToSearch)
  {
    
    let copy:Product[] = [...this.products];
    
    if(categoryToSearch!== undefined && categoryToSearch !== null && categoryToSearch !== '')
    {
      categoryToSearch = categoryToSearch.toUpperCase();
      copy = copy.filter(product => product.category.toUpperCase().includes(categoryToSearch));
    }

    if(nameToSearch !== undefined && nameToSearch !== null && nameToSearch !== '')
    {
      nameToSearch = nameToSearch.toUpperCase();
      copy = copy.filter(product => product.name.toUpperCase().includes(nameToSearch));
    }
    this.productsChanged.next(copy);
    this.editModeChanged.next(false);

  }
  setBasicList()
  {
    this.products = this.basicList.slice();
    this.orderArray();
    this.productsChanged.next(this.products.slice())
  }
}

