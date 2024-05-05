import { NgIf } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Moment } from '../../Moment';


@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!: string
  @Input() momentData: Moment | null = null;
  momentForm!: FormGroup
  

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id : ''),
      title: new FormControl(this.momentData ? this.momentData.title : '', [Validators.required]),
      description: new FormControl(this.momentData ? this.momentData.description : '', [Validators.required]),      
      image: new FormControl(''),
    })
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  submit() {    
    if (this.momentForm.invalid) {
      console.log('Nao envia o formulario!')
      return;
    }
    console.log('Envia o formulario!');
    console.log(this.momentForm.value);

    this.onSubmit.emit(this.momentForm.value);
  }
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0]
    this.momentForm.patchValue({image: file});
  }

}
