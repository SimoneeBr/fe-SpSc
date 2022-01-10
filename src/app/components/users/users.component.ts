import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private beService: BackendService) {
  }

  ngOnInit(): void {
  }


  allVerifiedVisitors(): void {
    this.beService.allVerifiedVisitors().subscribe((data) => {

    });
  }

  allVisitors(): void {
    this.beService.allVisitors().subscribe((data) => {

    });
  }

  allVisitorsByDay(): void {
    this.beService.allVisitorsByDay().subscribe((data) => {

    });
  }
}
