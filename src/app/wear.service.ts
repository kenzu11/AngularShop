import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Wear } from './wear';


@Injectable()
export class WearService {

private headers = new Headers({'Content-Type': 'application/json'});
private url:string;
constructor(private http: Http) { }

private wears: Wear[] = [];

 public getlist(): Promise<Wear[]> {
    this.url = '/api/mens';

    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        this.wears = response.json();
        return this.wears;
      })
      .catch(this.handleError);
  }

 public getLadylist(): Promise<Wear[]> {
    this.url = '/api/mens';

    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        this.wears = response.json();
        return this.wears;
      })
      .catch(this.handleError);
  }


  public getIssue(id: number): Promise<Wear> {
    return this.http.get(this.url + `/${id}`)
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }



}
