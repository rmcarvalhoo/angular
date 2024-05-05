import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moment';
import { envroinment } from '../../../../envroinments/envroinments';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = envroinment.baseApiUrl;

  faSearch = faSearch;
  searchTerm = '';

  constructor(private momentService: MomentService) {  }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
        const data = items.data        
        data.map((item) => {          
          item.created_at = new Date(item.created_at!).toLocaleDateString();          
        })
        this.allMoments = data;
        this.moments = data; 
    });

  }

  search(e: Event): void{
    const target = e.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value)
    });
  }

}
