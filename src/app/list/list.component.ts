import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WearService } from '.././wear.service';

import { Wear } from '.././wear';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  id: string;
  wears: Wear[];

  constructor(private route: ActivatedRoute,private wearservice: WearService) {
    route.params.subscribe(val => {
      this.id = this.route.snapshot.params['id'];
      console.log("id = " + this.id);
      this.getList();
    });
  }

  getList():void {
      this.wearservice.getlist().then(
        response => this.wears = response
      )
      console.log("list" + this.id);

  }

  ngOnInit() {
    /*    
        this.id = this.route.snapshot.params['id'];
          console.log("friend id = " + this.id);
    */
  }

}
