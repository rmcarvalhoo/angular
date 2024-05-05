import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick() {
    console.log('change-number ira emitir o evento que é o click');
    this.changeNumber.emit();
  }
}
