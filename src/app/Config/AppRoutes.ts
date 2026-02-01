import { Routes } from '@angular/router';
import { LayoutComponent } from '../Layout/LayoutComponent';
import { HomeComponent } from "../Layout/Home/HomeComponent";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        loadComponent: () => import('../Features/Products/ProductList/ProductListComponent')
          .then(m => m.ProductListComponent)
      },
      {
        path: 'products/:id',
        loadComponent: () => import('../Features/Products/ProductDetail/ProductDetailComponent')
          .then(m => m.ProductDetailComponent)
      }
    ]
  },
  { path: '**', redirectTo: '' },
];
