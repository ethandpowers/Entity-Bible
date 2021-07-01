import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-result',
  templateUrl: './entity-result.component.html',
  styleUrls: ['./entity-result.component.css']
})
export class EntityResultComponent implements OnInit {

  constructor(private _router: Router) {
    this.data = history.state.data;
    if(this.data == undefined){
      this._router.navigate(['404']);
      return;
    }
    this.data.sort();
  }

  ngOnInit(): void {}

  returnToEntity(){
    this._router.navigate(['entity-search']);
  }

  data:any[] = [];
}
