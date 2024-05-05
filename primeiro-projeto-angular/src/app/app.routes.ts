import { Routes } from '@angular/router';

import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './componets/item-detail/item-detail.component';

export const routes: Routes = [
    {path: 'first', component: FirstComponentComponent},    
    {path: 'parent', component: ParentDataComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'if', component: IfRenderComponent},
    {path: 'events', component: EventsComponent},
    {path: 'emitter', component: EmitterComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'twowaybiding', component: TwoWayBindingComponent},
    {path: 'list/:id', component: ItemDetailComponent},
];
