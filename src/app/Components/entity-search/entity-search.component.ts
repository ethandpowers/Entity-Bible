import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalEntitySearch } from 'src/models/EntitySearchAPI/LocalEntitySearch';
import { Person } from 'src/models/Person';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.css'],
})
export class EntitySearchComponent implements OnInit {
  constructor(private _snackbar: MatSnackBar, private _router: Router) {
    this.data = [];
  }

  ngOnInit(): void {}

  GetData() {
    if (
      this.searchTypeValue == '' ||
      this.searchParamValue == '' ||
      this.searchValue == ''
    ) {
      this._snackbar.open('Please enter valid search options', 'Try again', {
        duration: 5000,
      });
      return;
    } else {
      this.isSearching = true;
      this.data = LocalEntitySearch.GetData(
        this.searchTypeValue,
        this.searchParamValue,
        this.searchValue
      );
      console.log(this.data);
      if (this.data.length < 1) {
        this._snackbar.open('No results found', 'Search again', {
          duration: 5000,
        });
        this.isSearching = false;
        return;
      }
      this._router.navigate(['entity-result'], {
        state: { data: this.data },
      });
    }
  }

  updateKeystroke(input: string) {
    this.searchValue = input;
  }

  isSearching:boolean = false;
  searchParams: string[] = [];
  searchTypes: string[] = ['Person', 'Place', 'People Group', 'Event',  'Book'];
  searchTypeValue: string = '';
  searchParamValue: string = '';
  searchValue: any = '';
  box: string = '';
  searchTypeControl = new FormControl('', Validators.required);
  searchParamControl = new FormControl('', Validators.required);
  searchValueControl = new FormControl('', Validators.required);
  data: any[] = [];

  GetSearchParams() {
    this.searchParamValue = '';
    this.searchValue = '';
    if (this.searchTypeValue == 'Person') {
      this.searchParams = [
        'Name',
        'Display Title',
        'Also Called',
        'Birth Place',
        'Death Place',
        'Siblings',
        'Mother',
        'Father',
        'Children',
        'Partners',
        'Surname',
      ];
    } else if (this.searchTypeValue == 'Place') {
      this.searchParams = [
        'Display Title',
        'Aliases',
        'People Born',
        'People Died',
      ];
    } else if (this.searchTypeValue == 'People Group') {
      this.searchParams = ['Group Name', 'Members'];
    } else if (this.searchTypeValue == 'Event') {
      this.searchParams = ['Title', 'Participant', 'Location', 'Part Of'];
    } else if (this.searchTypeValue == 'Period') {
      this.searchParams = [
        'Year Number',
        'Formatted Year',
        'Books Written',
        'Events',
        'People Born',
        'People Died',
      ];
    } else if (this.searchTypeValue == 'Book') {
      this.searchParams = [
        'Title',
        'Short Name',
        'Category',
        'Order',
        'Writer',
        'Year Written',
        'Place Written',
      ];
    } else {
      this.searchParams = [];
    }
  }
}
