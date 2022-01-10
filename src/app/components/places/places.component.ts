import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  constructor(private beService: BackendService) {
  }

  ngOnInit(): void {
  }


  countryOfTweets(): void {
    this.beService.countryOfTweets().subscribe((data) => {

    });
  }

  countryOfVisitors(): void {
    this.beService.countryOfVisitors().subscribe((data) => {

    });
  }

  italianTweets(): void {
    this.beService.italianTweets().subscribe((data) => {

    });
  }

}
