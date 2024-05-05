import { DatePipe, TitleCasePipe, UpperCasePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  sameText = "O ANGULAR É BOM!";
  today = new Date();

}
