import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { envroinment } from '../../../../envroinments/envroinments';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormGroupDirective } from '@angular/forms';
import { Comment } from '../../../Comment';
import { CommentService } from '../../../services/comment.service';


@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [NgIf, NgFor, FontAwesomeModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {
  moment?: Moment;
  faEdit = faEdit; 
  faTimes = faTimes;
  baseApiUrl = envroinment.baseApiUrl;

  // o ! diz ao algumar que essa entidade ira existir
  commentForm!: FormGroup;
  

  constructor(
    private momentService: MomentService, 
    private route : ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(id).subscribe(item => (this.moment = item.data));
    this.commentForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required])

    })
  }

  get text(){
    return this.commentForm.get('text')!;
  }

  get username(){
    return this.commentForm.get('username')!;
  }


  async removeHandler(id : number) {
    await this.momentService.removeMoment(id).subscribe();
    this.messagesService.add("Registro exluido com sucesso!");
    this.router.navigate(['/']);
  }

  async onSubmit(formDirective: FormGroupDirective) {

    if (this.commentForm.invalid) {
      return;
    }

    const data: Comment = this.commentForm.value;
    data.momentId = Number(this.moment?.id);
    await this.commentService.createComment(data).subscribe((comment) => this.moment!.comments!.push(comment.data));
    this.messagesService.add("Comentario adicionado!")
    this.commentForm.reset();
    formDirective.resetForm();


  }

}
