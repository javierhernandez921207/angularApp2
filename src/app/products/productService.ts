import {Injectable} from '@angular/core';
import {IProduct} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): IProduct[] {
    return [{
      id: 1,
      name: 'Car',
      code: 'o GG sDB 78',
      price: 45,
      release: 'May 11, 2021',
      starRating: 3,
      description: 'asdasdasdasdasdasdasdasdasdasd asdasdasdasdas as dasd asd',
      imgUrl: 'http://localhost:4200/assets/images/garden_cart.png'
    },
      {
        id: 1,
        name: 'Hammer 2',
        code: 'ok hG GF Fgd 78',
        price: 20,
        release: 'May 11, 2021',
        starRating: 4.8,
        description: 'SVGFEColorMatrixElement as dasdasdasdasdasd asd asd as d',
        imgUrl: 'http://localhost:4200/assets/images/hammer.png'
      }];
  }
}
