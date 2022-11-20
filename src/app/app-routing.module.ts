import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {NofoundComponent} from "./nofound/nofound.component";
import {OffreDemploiComponent} from "./offre-demploi/offre-demploi.component";
import {ArticlesComponent} from "./articles/articles.component";

const routes: Routes = [
  {path: 'products',component:ProductsComponent},
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
