import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: '../../assets/car1.jpg',
      thumbImage: '../../assets/car1.jpg',
      alt: 'Image 1',
      title: 'Almacén'
    }, {
      image: '../../assets/car2.jpg',
      thumbImage: '../../assets/car2.jpg',
      title: 'Accesorios Exterior',
      alt: 'Image 2'
    }, {
      image: '../../assets/car3.jpg',
      thumbImage: '../../assets/car3.jpg',
      title: 'Mantenimiento',
      alt: 'Image 3'
    }, {
      image: '../../assets/car4.jpg',
      thumbImage: '../../assets/car4.jpg',
      title: 'Accesorios Interior',
      alt: 'Image 4'
    }, {
      image: '../../assets/casco.jpg',
      thumbImage: '../../assets/casco.jpg',
      title: 'Cascos',
      alt: 'Image 5'
    }, {
      image: '../../assets/chaqueta.jpg',
      thumbImage: '../../assets/chaqueta.jpg',      
      title: 'Chaquetas',
      alt: 'Image 6'
    }, {
      image: '../../assets/guante.png.jpg',
      thumbImage: '../../assets/guante.png.jpg',
      title: 'Guantes',
      alt: 'Image 7'
    }, {
      image: '../../assets/llanta.png',
      thumbImage: '../../assets/llanta.png',
      title: 'LLantas',
      alt: 'Image 8'
    }, {
      image: '../../assets/aceite.png',
      thumbImage: '../../assets/aceite.png',
      title: 'Aceites',
      alt: 'Image 9'
    }
    
    
    
    
    
];


}
