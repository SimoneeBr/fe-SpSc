import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {LegendPosition} from "@swimlane/ngx-charts";
import {Constants} from "../../utils/constants";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  showLabels: boolean = true;
  legendPosition = LegendPosition.Right;
  view = Constants.view; //for monitor
  reducedView = Constants.reducedView; //for monitor

  loading = [];

  chartObject: any[] = [];

  unitsAllVerifiedVisitors = "All Verified Visitors"
  unitsAllVisitors = "All Visitors"
  total = 250;

  colorScheme = Constants.colorScheme;

  // options of BAR CHART
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  gridLines = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Days';
  showYAxisLabel = true;
  yAxisLabel = 'Visitors';

  constructor(private beService: BackendService) {
    this.loading = new Array(4).fill(true);
  }

  ngOnInit(): void {
  }


  allVerifiedVisitors(): void {
    this.loading[0] = true;
    this.beService.allVerifiedVisitors().subscribe((response) => {
      this.chartObject[0] = [];
      this.chartObject[0].push(response.data);
      this.loading[0] = false;
    });
  }

  allVisitors(): void {
    this.loading[1] = true;
    this.beService.allVisitors().subscribe((response) => {
      this.chartObject[1] = [];
      this.chartObject[1].push(response.data);
      this.loading[1] = false;
    });
  }

  allVisitorsByDay(): void {
    this.beService.allVisitorsByDay().subscribe((response) => {
      let data = response.data;
      this.chartObject[2] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.formatted_data,
          "value": x.count
        };

        this.chartObject[2].push(obj);
        this.chartObject[2].sort((a, b) => {
          a = a.name.split('/').reverse().join('');
          b = b.name.split('/').reverse().join('');
          return a > b ? 1 : a < b ? -1 : 0;
        });
      }
      this.loading[2] = false;
    });
  }

  allVisitorsByDayWithoutGeo(): void {
    this.beService.allVisitorsByDayWithoutGeo().subscribe((response) => {
      let data = response.data;
      this.chartObject[3] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.formatted_data,
          "value": x.count
        };

        this.chartObject[3].push(obj);
        this.chartObject[3].sort((a, b) => {
          a = a.name.split('/').reverse().join('');
          b = b.name.split('/').reverse().join('');
          return a > b ? 1 : a < b ? -1 : 0;
        });
      }
      this.loading[3] = false;
    });
  }
}
