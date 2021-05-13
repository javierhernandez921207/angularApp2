export interface IProduct {
  id: number;
  name: string;
  code: string;
  release: string;
  price: number;
  description: string;
  starRating: number;
  imgUrl: string;
}

export class Product implements IProduct {
  constructor(public id: number,
              public name: string,
              public code: string,
              public release: string,
              public price: number,
              public description: string,
              public starRating: number,
              public imgUrl: string) {
  }

  calculateDiscount(percent: number): number {
    return this.price - (this.price * percent / 100);
  }
}


