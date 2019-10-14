import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient, private dataService:DataService) {
    this.fetchProducts();
  }

  storageProducts()
  {
    const products = this.dataService.getProducts();
    this.http.put('https://shopping-list-d9877.firebaseio.com/products.json', products).subscribe(
      Response =>{
        console.log(Response);
      }
    )
  }
  fetchProducts()
  {
    this.http.get<Product[]>('https://shopping-list-d9877.firebaseio.com/products.json')
    .subscribe(products =>{
      this.dataService.setProducts(products);
      
    })
  }

  setToTheBasicList()
  {
    this.dataService.setBasicList();
    const products = this.dataService.getProducts();
    this.http.put('https://shopping-list-d9877.firebaseio.com/products.json', products).subscribe(
      Response =>{
        console.log(Response);
      }
    )
  }

}


