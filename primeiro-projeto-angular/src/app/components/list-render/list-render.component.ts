import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  constructor(private listService: ListService) {
    this.getAnimals();
  }  

  animals: Animal[] = [];
  // animals: Animal[] = [
  //   {name : "Tuca", type: "DOG", age: 4},
  //   {name : "Chaninha", type: "CAT", age: 10},
  //   {name : "Rex", type: "DOG", age: 5},
  //   {name : "Pé de pano", type: "HORSE", age: 2},
  // ];

  animalDetails = '';
  showAge(animal : Animal): void {
    this.animalDetails = `O pet ${ animal.name } que é um ${ animal.type } tem ${ animal.age } anos`;
  }
  
  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => this.animals = animals );
  }

}
