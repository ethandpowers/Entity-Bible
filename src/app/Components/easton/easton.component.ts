import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { DictItem } from 'src/models/DictItem';
import { IdTranslator } from 'src/models/IdTranslator';
import { LocalDictionary } from 'src/models/LocalDictionary';

@Component({
  selector: 'app-easton',
  templateUrl: './easton.component.html',
  styleUrls: ['./easton.component.css'],
})
export class EastonComponent implements OnInit {
  constructor(
    private _snackbar: MatSnackBar,
    private _router: Router
  ) {
    this.data = [];
    let localDictionary = new LocalDictionary();
  }

  ngOnInit(): void {}

  searchParams: string[] = [
    'Term Label',
    'Dictionary Lookup',
    'Text Contains',
    'Index'
  ];

  async searchEaston() {
    if (
      this.searchParamControl.hasError('required') ||
      this.searchValueControl.hasError('required')
    ) {
      console.log('Required attribtes were missing from form upon submission');
      return;
    }

    this.data = LocalDictionary.GetData(
      this.searchParamValue,
      this.searchValue
    );

    if (this.data.length == 0) {
      this._snackbar.open('No results', 'Search again', {
        duration: 5000,
      });
      return;
    }

    this._router.navigate(['easton-result'], {
      state: { data: this.data },
    });
  }

  updateKeystroke(input: string) {
    this.searchValue = input;
  }

  searchParamValue: string = '';
  searchValue: any = '';
  box: string = '';
  searchParamControl = new FormControl('', Validators.required);
  searchValueControl = new FormControl('', Validators.required);
  data: DictItem[];
}
