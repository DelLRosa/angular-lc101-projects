import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'my cat';
  image1 = 'https://i.imgur.com/TDTfT1x.jpg';
  image2 = 'https://i.imgur.com/15HFQXP.jpg';
  image3 = 'https://i.imgur.com/RUb3VEA.jpg';

  constructor() { }

  ngOnInit() {
  }

}