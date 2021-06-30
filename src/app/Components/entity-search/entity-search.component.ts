import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.css']
})
export class EntitySearchComponent implements OnInit {

  constructor(
    private db: AngularFirestore,
    private _snackbar: MatSnackBar,
    private _router: Router)
    {
      this.sub = new Subscription();
      this.data = [];
    }

  ngOnInit(): void {
  }

  GetData(){

  }

  searchParamValue: string = '';
  searchValue: any = '';
  box: string = '';
  searchParamString: string = '';
  searchParamControl = new FormControl('', Validators.required);
  searchValueControl = new FormControl('', Validators.required);
  dataType:string = "";
  data:any[];
  sub:Subscription;
}
