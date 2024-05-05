import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})

export class FirstComponentComponent {
  name : string = 'Ricardo Carvalho';
  age: number = 39;
  hobbies = ['Correr', 'Jogar', 'Etudar'];
  car = {
    name: 'Polo',
    year: 2021,
  }
}
