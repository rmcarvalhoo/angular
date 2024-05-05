import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './componets/item-detail/item-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FirstComponentComponent, 
    ParentDataComponent, 
    DirectivesComponent, 
    IfRenderComponent,
    EventsComponent,
    EmitterComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
    FormsModule,
    RouterOutlet,
    RouterLink,
    ItemDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto-angular';
  userName = 'Joaquim';
  userData = {
    email: 'cremildo@gmail.com',
    role: 'Admin',
  };
}

