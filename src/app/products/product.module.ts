import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list/product-listComponent';
import {ProductDetailComponent} from './product-detail/product-detailComponent';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from './product-detail.guard';
import {SharedModule} from '../shared/shared.module';
import {ConvertToSpace} from '../shared/convert-to-space.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpace,
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule {
}
