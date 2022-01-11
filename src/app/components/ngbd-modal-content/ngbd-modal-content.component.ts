import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Tweet Info</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul>
        <li><strong>ID</strong>: <i>{{tweet.id}}</i></li>
        <li><strong>Created At</strong>: {{this.formatDate()}}</li>
        <li><strong>Author Id</strong>: <i>{{tweet.author_id}}</i></li>
        <li><strong>Text</strong>: {{tweet.text}}</li>
        <li><strong>Lang</strong>: {{formatLang()}}</li>
        <li><strong>Source</strong>: {{tweet.source}}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./ngbd-modal-content.component.scss']
})
export class NgbdModalContentComponent {
  @Input() tweet;

  constructor(public activeModal: NgbActiveModal, public date: DatePipe) {
  }

  formatDate(): string {
    return this.date.transform(this.tweet.created_at, 'MMM d, y, h:mm:ss a')
  }

  formatLang(): string {
    return this.tweet.lang.toUpperCase();
  }
}
