import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    autoplay: true,
    spaceBetween: 20
  };

  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 5,
    autoplay: true,
    spaceBetween: 20
  };

  slideOpts3 = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 4,
    autoplay: true,
    spaceBetween: 20
  };

  data = [
    {
      title: 'Reloj Technomarine',
      subtitle: 'Manta TM-215064',
      description: 'Stainless Steel C',
      price: 457458,
      image: 'https://cdn.shopify.com/s/files/1/0343/2824/8459/products/886678969876_360x.jpg?v=1591107374%20360w',
      discount: 119999
    },
    {
      title: 'Reloj Technomarine',
      subtitle: 'Manta TM-215064',
      description: 'Stainless Steel C',
      price: 457458,
      image: 'https://cdn.shopify.com/s/files/1/0343/2824/8459/products/886678969869_1024x1024@2x.jpg?v=1586360517',
      discount: 119999
    },
    {
      title: 'Reloj Technomarine',
      subtitle: 'Manta TM-215064',
      description: 'Stainless Steel C',
      price: 457458,
      image: 'https://cdn.shopify.com/s/files/1/0343/2824/8459/products/886678942831_1024x1024@2x.jpg?v=1587069558',
      discount: 119999
    },
    {
      title: 'Reloj Technomarine',
      subtitle: 'Manta TM-215064',
      description: 'Stainless Steel C',
      price: 457458,
      image: 'https://cdn.shopify.com/s/files/1/0343/2824/8459/products/886678942848_afc5ccd4-99b8-4845-b343-6538b26ff0d1_1024x1024@2x.jpg?v=1586956985',
      discount: 119999
    },
    {
      title: 'Reloj Technomarine',
      subtitle: 'Manta TM-215064',
      description: 'Stainless Steel C',
      price: 457458,
      image: 'https://cdn.shopify.com/s/files/1/0343/2824/8459/products/886678946792_1024x1024@2x.jpg?v=1591043280',
      discount: 119999
    },
    {
      title: 'Reloj Technomarine',
      subtitle: 'Manta TM-215064',
      description: 'Stainless Steel C',
      price: 457458,
      image: 'https://cdn.shopify.com/s/files/1/0343/2824/8459/products/886678989287_0bc4a1c4-d81a-4ade-8ce3-d284e5090b56_1024x1024@2x.jpg?v=1587070069',
      discount: 119999
    },
    {
      title: 'Reloj Technomarine',
      subtitle: 'Manta TM-215064',
      description: 'Stainless Steel C',
      price: 457458,
      image: 'https://cdn.shopify.com/s/files/1/0343/2824/8459/products/886678946808_1024x1024@2x.jpg?v=1597965529',
      discount: 119999
    },
  ]

  constructor() {
    if(window.innerWidth <= 768 ){
      this.slideOpts2 = {
        initialSlide: 0,
        speed: 400,
        slidesPerView: 2,
        autoplay: true,
        spaceBetween: 20
      };

      this.slideOpts3 = {
        initialSlide: 0,
        speed: 400,
        slidesPerView: 2,
        autoplay: true,
        spaceBetween: 20
      };
    }
  }

  next() {

  }

  prev() {

  }

}
