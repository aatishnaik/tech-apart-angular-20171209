import { Component, OnInit } from '@angular/core';
import { Trip, Amount } from '../../models/trip';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  title = 'Flights of a Lifetime';
  pendingAmount = 0;
  addTripFormMode = false;
  form: FormGroup;
  trip: Amount = {
    pamt: 0,
    namt: 0,
    tamt: 0
  };
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(8)]),
      price: new FormControl(1200, Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  toggleDisplayMode() {
    this.addTripFormMode = !this.addTripFormMode;
  }

  formSubmitted() {
    if (this.form.valid) {
    const newTrip = {
      name: this.form.controls.name.value,
      price: this.form.controls.price.value,
      duration: this.form.controls.duration.value,
      description: this.form.controls.description.value,
    };
    this.trips.push(newTrip);
    this.toggleDisplayMode();
  }
  }

}
