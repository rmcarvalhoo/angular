import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent} from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentComponent } from './components/pages/moment/moment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MomentFormComponent,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MessagesComponent,
    FontAwesomeModule,  
    MomentComponent,  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moments';
}
