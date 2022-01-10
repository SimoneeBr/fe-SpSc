import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.scss']
})
export class EntryPageComponent implements OnInit {

  constructor(private beService: BackendService) {
  }

  ngOnInit(): void {
    this.beService.countryOfVisitors().subscribe(
      l => console.log(l)
    );
  }

}
