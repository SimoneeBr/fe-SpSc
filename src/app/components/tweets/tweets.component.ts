import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {LegendPosition} from "@swimlane/ngx-charts";
import {Constants} from "../../utils/constants";

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
  reducedView: [number, number] = [1500, 300]; //for monitor

  loading = [];

  chartObject: any[] = [];

  unitsVerifiedVisitors = "Tweets By Verified Visitors"
  unitsItalianVisitors = "Tweets By Italian Visitors"
  total = 15000;

  colorScheme = Constants.colorScheme;

  constructor(private beService: BackendService) {
    this.loading = new Array(9).fill(true);
  }

  ngOnInit(): void {
  }

  deviceOfTweets(): void {
    this.loading[0] = true;
    this.beService.deviceOfTweets().subscribe((response) => {
      let data = response.data;
      this.chartObject[0] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.source,
          "value": x.count
        };
        this.chartObject[0].push(obj);
      }
      this.loading[0] = false;
    });
  }

  like_count(): void {
    this.loading[1] = true;
    this.beService.like_count().subscribe((response) => {
      let data = response.data;
      this.chartObject[1] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.tweet_id,
          "value": x.pm_like_count
        };
        this.chartObject[1].push(obj);
      }
      this.loading[1] = false;
    });
  }

  retweet_count(): void {
    this.loading[2] = true;
    this.beService.retweet_count().subscribe((response) => {
      let data = response.data;
      this.chartObject[2] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.tweet_id,
          "value": x.pm_retweet_count
        };
        this.chartObject[2].push(obj);
      }
      this.loading[2] = false;
    });
  }

  quote_count(): void {
    this.loading[3] = true;
    this.beService.quote_count().subscribe((response) => {
      let data = response.data;
      this.chartObject[3] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.tweet_id,
          "value": x.pm_quote_count
        };
        this.chartObject[3].push(obj);
      }
      this.loading[3] = false;
    });
  }

  reply_count(): void {
    this.loading[4] = true;
    this.beService.reply_count().subscribe((response) => {
      let data = response.data;
      this.chartObject[4] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.tweet_id,
          "value": x.pm_reply_count
        };
        this.chartObject[4].push(obj);
      }
      this.loading[4] = false;
    });
  }

  mostFrequentHashtag(): void {
    this.loading[5] = true;
    this.beService.mostFrequentHashtag().subscribe((response) => {
      let data = response.data;
      this.chartObject[5] = [];
      for (const d of data) {
        let x = JSON.parse(d);
        let obj = {
          "name": x.tag,
          "value": x.count
        };
        this.chartObject[5].push(obj);
      }
      this.loading[5] = false;
    });
  }

  allTweetsByVerifiedVisitor(): void {
    this.loading[6] = true;
    this.beService.allTweetsByVerifiedVisitor().subscribe((response) => {
      this.chartObject[6] = [];
      this.chartObject[6].push(response.data);
      this.loading[6] = false;
    });
  }

  italianTweets(): void {
    this.loading[7] = true;
    this.beService.italianTweets().subscribe((response) => {
      this.chartObject[7] = [];
      this.chartObject[7].push(response.data);
      this.loading[7] = false;
    });
  }

  tweetsNLP(): void {
    this.loading[8] = true;
    this.chartObject[8] = [];
    let obj1 = {
      "name": "POSITIVE TWEETS",
      "value": 792
    };
    this.chartObject[8].push(obj1);
    let obj2 = {
      "name": "NEUTRAL TWEETS",
      "value": 321
    };
    this.chartObject[8].push(obj2);
    let obj3 = {
      "name": "NEGATIVE TWEETS",
      "value": 506
    };
    this.chartObject[8].push(obj3);
    this.loading[8] = false;
    //TODO make chart of this query
    // this.beService.tweetsNLP().subscribe((response) => {
    //
    // });
  }

}
