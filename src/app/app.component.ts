import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  products: Product[] = [
    {
      id: 1,
      name: 'Automobil de juguete',
      price: 100,
      image: '../assets/images/img1.jpg'
  },
  {
      id: 2,
      name: 'Muñeca de trapo',
      price: 180,
      image: '../assets/images/img2.jpg'
  },
  {
      id: 3,
      name: 'Pelota de futbol',
      price: 120,
      image: '../assets/images/img3.jpg'
  }
  ];

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
