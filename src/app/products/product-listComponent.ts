import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-listComponent.html',
  styleUrls: ['./product-listComponent.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Lista de Productos';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: IProduct[] = [
    {
      id: 1,
      name: 'Car',
      code: 'o GG sDB 78',
      price: 45,
      release: 'May 11, 2021',
      starRating: 4.2,
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
    }
  ];

  filteredProducts: IProduct[] = this.products;
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit.');
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
