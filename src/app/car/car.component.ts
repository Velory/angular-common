import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  // template: `
  // <h2>Single car</h2>
  // <p>akcdjincewifcnwhc</p>
  // `,
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  carName = 'Ford';
  carYear = 2015;

  getName() {
    return this.carName;
  }

}
