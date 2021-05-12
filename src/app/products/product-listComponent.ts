import {Component} from '@angular/core';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-listComponent.html'
})
export class ProductListComponent {
  pageTitle: string = 'Lista de Productos';
  products: any[] = [
    {
      'id': 1,
      'name': 'Producto 1',
      'code': 'okhsbd78',
      'price': 45,
      'release': 'May 11, 2021',
      'starRaiting': 4.2
    },
    {
      'id': 1,
      'name': 'Producto 2',
      'code': 'okhtgd78',
      'price': 20,
      'release': 'May 11, 2021',
      'starRaiting': 4.8
    }
  ];
}
