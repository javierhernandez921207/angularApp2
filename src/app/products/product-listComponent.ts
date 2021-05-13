import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './productService';

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
  products: IProduct[];
  filteredProducts: IProduct[];
  private _listFilter;


  constructor(private productService: ProductService) {
    this._listFilter = '';
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

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

  onRatingClicked(mensaje: string): void {
    this.pageTitle = 'Lista de Productos ' + mensaje;
  }

}
