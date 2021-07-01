import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { DictItem } from 'src/models/DictItem';

@Component({
  selector: 'app-easton',
  templateUrl: './easton.component.html',
  styleUrls: ['./easton.component.css'],
})
export class EastonComponent implements OnInit, OnDestroy {
  constructor(
    private db: AngularFirestore,
    private _snackbar: MatSnackBar,
    private _router: Router
  ) {
    this.data = [];
    this.sub = new Subscription();
  }

  ngOnInit(): void {}

  searchParams: string[] = [
    'Term Label',
    'Dictionary Lookup',
    'Definition ID',
    'Index',
  ];

  async searchEaston() {
    if (
      this.searchParamControl.hasError('required') ||
      this.searchValueControl.hasError('required')
    ) {
      console.log('Required attribtes were missing from form upon submission');
      return;
    }
    if (this.searchParamValue == 'Definition ID') {
      this.searchParamString = 'def_id';
    }
    if (this.searchParamValue == 'Dictionary Lookup') {
      this.searchParamString = 'dictLookup';
    }
    if (this.searchParamValue == 'Term Label') {
      this.searchParamString = 'termLabel';
    }
    if (this.searchParamValue == 'Index') {
      this.searchParamString = 'index';
      this.searchValue = Number(this.searchValue);
    }
    if (this.searchParamValue == 'Term ID') {
      this.searchParamString = 'termID';
    }
    if (typeof this.searchValue === 'string' && !(this.searchParamString == "def_id" || this.searchParamString == "termID")) {
      this.searchValue = this.capitalizeFirstLetter(this.searchValue);
    }
    this.sub = this.db
      .collection('easton', (query) =>
        query.where(`fields.${this.searchParamString}`, '==', this.searchValue)
      )
      .valueChanges()
      .subscribe((val) => {
        this.data = <DictItem[]>val;
        console.log(this.data);
        if (this.data.length == 0) {
          this._snackbar.open('No results in database', 'Search again', {
            duration: 10000,
          });
          this.sub.unsubscribe();
          console.log("unsubscribed")
          return;
        }
        this._router.navigate(['easton-result'], {
          state: { data: this.data },
        });
      });
  }

  updateKeystroke(input: string) {
    this.searchValue = input;
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log('unsubscribed');
  }

  searchParamValue: string = '';
  searchValue: any = '';
  box: string = '';
  searchParamString: string = '';
  searchParamControl = new FormControl('', Validators.required);
  searchValueControl = new FormControl('', Validators.required);
  data: DictItem[];
  sub: Subscription;
}
