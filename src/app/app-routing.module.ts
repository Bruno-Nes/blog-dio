import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './pages/design/design.component';
import { BooksComponent } from './pages/books/books.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:'design',
    component: DesignComponent
  },
  {
    path:'books',
    component: BooksComponent
  },
  {
    path:'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
