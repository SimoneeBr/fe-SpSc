import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {LegendPosition} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  legendPosition = LegendPosition.Right;
  view: [number, number] = [1500, 620]; //for monitor

  loading = [true, true, true, true, true, true, true, true, true]; //FIXME populate this array in constructor

  pieChartObject: any[] = [];

  constructor(private beService: BackendService) {

  }

  ngOnInit(): void {
  }

  deviceOfTweets(): void {
    this.loading[0] = true;
    this.beService.deviceOfTweets().subscribe((response) => {
      let data = response.data;
      this.pieChartObject[0] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.source,
          "value": x.count
        };
        this.pieChartObject[0].push(obj);
      }
      this.loading[0] = false;
      console.log(this.pieChartObject[0]);
    });
  }

  like_count(): void {
    this.beService.like_count().subscribe((data) => {

    });
  }

  retweet_count(): void {
    this.beService.retweet_count().subscribe((data) => {

    });
  }

  quote_count(): void {
    this.beService.quote_count().subscribe((data) => {

    });
  }

  reply_count(): void {
    this.beService.reply_count().subscribe((data) => {

    });
  }

  mostFrequentHashtag(): void {
    this.beService.mostFrequentHashtag().subscribe((data) => {

    });
  }

  allTweetsByVerifiedVisitor(): void {
    this.beService.allTweetsByVerifiedVisitor().subscribe((data) => {

    });
  }

  italianTweets(): void {
    this.beService.italianTweets().subscribe((data) => {

    });
  }

  tweetsNLP(): void {
    this.beService.tweetsNLP().subscribe((data) => {

    });
  }

}
