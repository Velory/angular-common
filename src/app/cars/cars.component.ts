import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCar = false;
  inputText = 'Default text';
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMV', 'Mazda', 'Opel', 'Toyota'];
  items = [
    {id: 3, name: 'item1'},
    {id: 6, name: 'item2'},
    {id: 9, name: 'item3'}
  ];
  pipeItems = [
    new Date(2018, 1, 2),
    new Date(2018, 3, 4),
    new Date(2018, 9, 2),
    new Date(2018, 7, 3)
  ]

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  // The first type of transporting data
  // onKeyUp(event: Event) {
  //   console.log(event);
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }

  // The second type of transporting data
  onInput(value) {
    console.log(value);
    this.inputText = value;
  }

  onKeyUp(event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  setBigCarText(car: string) {
    return car.length > 4 ? true : false;
  }
}
