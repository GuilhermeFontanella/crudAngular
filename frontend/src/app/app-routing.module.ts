import { ProductDeleteComponent } from './components/template/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/template/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/template/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductCrudComponent },
  { path: "product/create", component: ProductCreateComponent },
  { path: "product/update/:id", component: ProductUpdateComponent },
  { path: "product/delete/:id", component: ProductDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
