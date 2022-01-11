import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {StandardResponse} from "../model/standard-response";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  public allVisitors(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/allVisitors");
  }

  public allVisitorsByDay(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/allVisitorsByDay");
  }

  public allVisitorsByDayWithoutGeo(): Observable<StandardResponse> {
    //TODO fare grafico di questa query
    return this.http.get<StandardResponse>(this.baseUrl + "/allVisitorsByDayWithoutGeo");
  }

  public tweetsNLP(): Observable<StandardResponse> {
    //query effettuata l'ultima volta 11/01
    return this.http.get<StandardResponse>(this.baseUrl + "/tweetsNLP");
  }

  public valByID(param: string): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/valByID/" + param);
  }

  public countryOfTweets(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/countryOfTweets");
  }

  public countryOfVisitors(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/countryOfVisitors");
  }

  public deviceOfTweets(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/deviceOfTweets");
  }

  public italianTweets(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/italianTweets");
  }

  public like_count(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/like_count");
  }

  public retweet_count(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/retweet_count");
  }

  public quote_count(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/quote_count");
  }

  public reply_count(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/reply_count");
  }

  public mostFrequentHashtag(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/mostFrequentHashtag");
  }

  public allTweetsByVerifiedVisitor(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/allTweetsByVerifiedVisitor");
  }

  public allVerifiedVisitors(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.baseUrl + "/allVerifiedVisitors");
  }


}
