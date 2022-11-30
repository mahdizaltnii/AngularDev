import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {NofoundComponent} from "./nofound/nofound.component";
import {OffreDemploiComponent} from "./offre-demploi/offre-demploi.component";
import {ArticlesComponent} from "./articles/articles.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {TemplateDrivenForm3Component} from "./template-driven-form3/template-driven-form3.component";

const routes: Routes = [
  {path: 'products',component:ProductsComponent},
  {path:'add',component:AddProductComponent},
  {path:'form',component:TemplateDrivenForm3Component},


  {path:'',redirectTo:'products',pathMatch:'full'},
  {path: 'offres',component:OffreDemploiComponent},
  {path: 'articles',component:ArticlesComponent},

  {path: '**',component:NofoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
