import { Component } from '@angular/core';
import { Moment } from '../../../Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { envroinment } from '../../../../envroinments/envroinments';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesService } from '../../../services/messages.service';
import { RouterLink } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { MomentFormComponent } from '../../moment-form/moment-form.component';


@Component({
  selector: 'app-edit-moment',
  standalone: true,
  imports: [NgIf, FontAwesomeModule, RouterLink, MomentFormComponent],
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css'
})
export class EditMomentComponent {
  moment!: Moment;
  btnText: string = 'Editar';

  baseApiUrl = envroinment.baseApiUrl;

  constructor(
    private momentService: MomentService, 
    private route : ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(id).subscribe(item => (this.moment = item.data));
  }

  async editHandler(momentData: Moment) {
    const id = this.moment.id;
    const formData = new FormData()
    formData.append('title', momentData.title)
    formData.append('description', momentData.description)
    if (momentData.image) {
      formData.append('image', momentData.image)
    }
    await this.momentService.updateMoment(id!, formData).subscribe();
    this.messagesService.add(`Moment ${id} atualizado com sucesso!`);
    this.router.navigate(['/']);
  }

}
