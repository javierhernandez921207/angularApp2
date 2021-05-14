import {Component, OnInit} from '@angular/core';
import {IProduct, Product} from '../product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detailComponent.html',
  styleUrls: ['./product-detailComponent.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';


  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
