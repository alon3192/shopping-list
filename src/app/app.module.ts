import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageComponent } from './manage/manage.component'
import { ShowProductsComponent } from './show-products/show-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BorderComponent } from './border/border.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    
    ShowProductsComponent,
    EditProductComponent,
    ManageComponent,
    FooterComponent,
    HeaderComponent,
    BorderComponent,
    AboutComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
