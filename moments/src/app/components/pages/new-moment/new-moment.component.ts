import { Component } from '@angular/core';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [ MomentFormComponent ],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = 'Compartilhar!';

  constructor(
    private momentService: MomentService, 
    private messagesService: MessagesService,
    private router: Router
  ) {}


  async createHandler(moment: Moment) {
    console.log('funcionou!');
    const formData = new FormData()
    formData.append("title",  moment.title);
    formData.append("description", moment.description);
    if (moment.image) {
      formData.append("image", moment.image);
    }
    
    await this.momentService.createMoment(formData).subscribe();
    this.messagesService.add("Momento adicionado com sucesso!");
    this.router.navigate(['/']);
  }

}
