import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { NofoundComponent } from './nofound/nofound.component';
import { OffreDemploiComponent } from './offre-demploi/offre-demploi.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
 import { ArticlesComponent } from './articles/articles.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenForm3Component } from './template-driven-form3/template-driven-form3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
     NofoundComponent,
     OffreDemploiComponent,
      ArticlesComponent,
      AddProductComponent,
      TemplateDrivenForm3Component,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
