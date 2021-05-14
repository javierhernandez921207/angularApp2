import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list/product-listComponent';
import {ConvertToSpace} from './shared/convert-to-space.pipe';
import {FormsModule} from '@angular/forms';
import {StarComponent} from './shared/startComponent';
import {HttpClientModule} from '@angular/common/http';
import {ProductDetailComponent} from './products/product-detail/product-detailComponent';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcomeComponent';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpace,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
