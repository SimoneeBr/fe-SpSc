import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {Constants} from "../../utils/constants";
import {LegendPosition} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  legendPosition = LegendPosition.Right;
  view: [number, number] = [1500, 620]; //for monitor
  reducedView: [number, number] = [1500, 300]; //for monitor

  loading = [];
  colorScheme = Constants.colorScheme;
  chartObject: any[] = [];
  unitsItalianVisitors = "Tweets By Italian Visitors"
  total = 15000;

  constructor(private beService: BackendService) {
    this.loading = new Array(3).fill(true);
  }

  ngOnInit(): void {
  }


  countryOfTweets(): void {
    this.loading[0] = true;
    this.beService.countryOfTweets().subscribe((response) => {
      let data = response.data;
      this.chartObject[0] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.country,
          "value": x.count
        };
        this.chartObject[0].push(obj);
      }
      this.loading[0] = false;
    });
  }

  countryOfVisitors(): void {
    this.loading[1] = true;
    this.beService.countryOfVisitors().subscribe((response) => {
      let data = response.data;
      this.chartObject[1] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.location,
          "value": x.count
        };
        this.chartObject[1].push(obj);
      }
      this.loading[1] = false;
    });
  }

  italianTweets(): void {
    this.loading[2] = true;
    this.beService.italianTweets().subscribe((response) => {
      this.chartObject[2] = [];
      this.chartObject[2].push(response.data);
      this.loading[2] = false;
    });
  }

}
