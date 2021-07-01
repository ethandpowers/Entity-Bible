import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.css'],
})
export class EntitySearchComponent implements OnInit, OnDestroy {
  constructor(
    private db: AngularFirestore,
    private _snackbar: MatSnackBar,
    private _router: Router
  ) {
    this.sub = new Subscription();
    this.data = [];
  }

  ngOnInit(): void {}

  GetData() {
    if (
      this.searchTypeValue == '' ||
      this.searchParamValue == '' ||
      this.searchValue == ''
    ) {
      return;
    } else {
      this.TranslateTypes();
      this.TranslateParams();
      this.searchVal = this.searchValue;

      this.sub = this.db
        .collection(this.typeVal, (query) =>
          query.where(`fields.${this.paramVal}`, this.operator, this.searchVal)
        )
        .valueChanges()
        .subscribe((val) => {
          this.data = val;
          console.log(this.data);
          if (this.data.length == 0) {
            this._snackbar.open('No results in database', 'Search again', {
              duration: 10000,
            });
            this.sub.unsubscribe();
            console.log('unsubscribed');
            return;
          }
          this._router.navigate(['entity-result'], {
            state: { data: this.data },
          });
        });
    }
  }

  updateKeystroke(input: string) {
    this.searchValue = input;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log('unsubscribed');
  }

  searchParams: string[] = [];
  searchTypes: string[] = [
    'Person',
    'Place (Not Ready)',
    'People Group (Not Ready)',
    'Period (Not Ready)',
    'Book (Not Ready)',
    'Chapter (Not Ready)',
  ];
  searchTypeValue: string = '';
  searchParamValue: string = '';
  searchValue: any = '';
  box: string = '';
  searchParamString: string = '';
  searchTypeControl = new FormControl('', Validators.required);
  searchParamControl = new FormControl('', Validators.required);
  searchValueControl = new FormControl('', Validators.required);
  dataType: string = '';
  data: any[];
  sub: Subscription;
  operator: any = '';

  typeVal: string = '';
  paramVal: string = '';
  searchVal: string | number = '';

  GetSearchParams() {
    this.searchParamValue = '';
    this.searchValue = '';
    if (this.searchTypeValue == 'Person') {
      this.searchParams = [
        'Name',
        'Display Title',
        'Also Called',
        'Birth Year',
        'Death Year',
        'Birth Place',
        'Death Place',
        'Siblings',
        'Mother',
        'Father',
        'Children',
        'Partners',
        'First Letter',
        'Unique Identifier',
        'Surname',
        'Chapters Written',
        'Person Lookup',
      ];
    } else {
      this.searchParams = [];
    }
  }

  TranslateTypes() {
    if (this.searchTypeValue == 'Person') {
      this.typeVal = 'people';
    } else if (this.searchTypeValue == 'Place') {
      this.typeVal == 'places';
    } else if (this.searchTypeValue == 'People Group') {
      this.typeVal == 'peopleGroups';
    } else if (this.searchTypeValue == 'Period') {
      this.typeVal == 'periods';
    } else if (this.searchTypeValue == 'Book') {
      this.typeVal == 'books';
    } else if (this.searchTypeValue == 'Chapter') {
      this.typeVal == 'chapters';
    }
  }

  TranslateParams() {
    if (this.searchTypeValue == 'Person') {
      if (this.searchParamValue == 'Person Lookup') {
        this.paramVal = 'personLookup';
        this.operator = '==';
      } else if (this.searchParamValue == 'Person ID') {
        this.paramVal = 'personID';
        this.operator = '==';
      } else if (this.searchParamValue == 'Name') {
        this.paramVal = 'name';
        this.operator = '==';
      } else if (this.searchParamValue == 'Birth Year') {
        this.paramVal = 'birthYear';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Death Year') {
        this.paramVal = 'deathYear';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Birth Place') {
        this.paramVal = 'birthPlace';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Death Place') {
        this.paramVal = 'deathPlace';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Siblings') {
        this.paramVal = 'siblings';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Mother') {
        this.paramVal = 'mother';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Father') {
        this.paramVal = 'father';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Children') {
        this.paramVal = 'children';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Display Title') {
        this.paramVal = 'displayTitle';
        this.operator = '==';
      } else if (this.searchParamValue == 'Partners') {
        this.paramVal = 'partners';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'First Letter') {
        this.paramVal = 'alphaGroup';
        this.operator = '==';
      } else if (this.searchParamValue == 'Unique Identifier') {
        this.paramVal = 'slug';
        this.operator = '==';
      } else if (this.searchParamValue == 'Also Called') {
        this.paramVal = 'alsoCalled';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Surname') {
        this.paramVal = 'surname';
        this.operator = '==';
      } else if (this.searchParamValue == 'Occupations') {
        this.paramVal = 'occupations';
        this.operator = 'array-contains';
      } else if (this.searchParamValue == 'Chapters Written') {
        this.paramVal = 'chaptersWritten';
        this.operator = 'array-contains';
      }
    } else if (this.searchTypeValue == '') {
    }
  }
}
