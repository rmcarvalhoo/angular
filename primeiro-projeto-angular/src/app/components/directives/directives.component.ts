import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size = 40;
  font = 'Arial';
  color = 'blue';

  classes = ['green-title', 'small-title'];

}
