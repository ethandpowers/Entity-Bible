import { Component, OnInit } from '@angular/core';
import { DictItem } from 'src/models/DictItem';
import { ActivatedRoute, Router } from '@angular/router';
import { rendererTypeName } from '@angular/compiler';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-easton-result',
  templateUrl: './easton-result.component.html',
  styleUrls: ['./easton-result.component.css'],
})
export class EastonResultComponent implements OnInit {
  constructor(private _router: Router) {
    this.data = <DictItem[]>history.state.data;
    if(this.data == undefined){
      this._router.navigate(['404']);
      return;
    }
    this.data.sort(this.compare)
  }

  ngOnInit(): void {}

  compare(a:DictItem, b:DictItem){
    if(a.fields.index > b.fields.index){return 1}
    else if(a.fields.index == b.fields.index){return 0}
    else return -1;
  }

  returnToEaston(){
    this._router.navigate(['easton']);
  }

  data: DictItem[] = [];
}
