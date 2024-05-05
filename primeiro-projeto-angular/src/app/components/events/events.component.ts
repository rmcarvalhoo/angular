import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgIf],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  show: boolean = false;
  showMessage(): void {
    this.show = !this.show;
  }

}
