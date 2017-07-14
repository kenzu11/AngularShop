import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-wears',
  templateUrl: './wears.component.html',
  styleUrls: ['./wears.component.css']
})
export class WearsComponent implements OnInit {

  friendId: string

  constructor(route: ActivatedRoute) {
      this.friendId = route.snapshot.params['id'];

      console.log("friend id = " + this.friendId);
  }

  ngOnInit() {
  }

}
