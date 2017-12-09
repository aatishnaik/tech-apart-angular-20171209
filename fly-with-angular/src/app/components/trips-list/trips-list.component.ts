import { Component, OnInit } from '@angular/core';
import { Trip } from '../../models/trip';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';
import { ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  title = 'Flights of a Lifetime';
  flag = false;
  trips: Array<Trip> = [
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png'
    }
  ];

  constructor() { }

  ngOnInit() {
    const form = new FormGroup({
      tripname: new FormControl(),
      tripcost: new FormControl(),
      tripduration: new FormControl(),
      tripdescription: new FormControl()
    });
    
  }
  // createForm(){
  //   this.ftripForm - this.fb.
  // }
showtrip(){
  this.flag = !this.flag;
}
}
