import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  constructor(private beService: BackendService) {
  }

  ngOnInit(): void {
  }

  deviceOfTweets(): void {
    this.beService.deviceOfTweets().subscribe((data) => {

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
