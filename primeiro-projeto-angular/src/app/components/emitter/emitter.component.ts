import { Component } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-emitter',
  standalone: true,
  imports: [ChangeNumberComponent],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {
  myNumber: number = 0;

  onChangeNumber() {
    console.log('emitter receber o evento e ira fazer a atribuição no numero');
    this.myNumber = Math.floor(Math.random() * 100);
  }
}
