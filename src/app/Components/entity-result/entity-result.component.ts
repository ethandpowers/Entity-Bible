import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdTranslator } from 'src/models/IdTranslator';

@Component({
  selector: 'app-entity-result',
  templateUrl: './entity-result.component.html',
  styleUrls: ['./entity-result.component.css'],
})
export class EntityResultComponent implements OnInit {
  constructor(private _router: Router) {
    this.data = history.state.data;
    if (this.data == undefined) {
      this._router.navigate(['404']);
      return;
    }
    this.data.sort();
  }

  ngOnInit(): void {}

  returnToEntity() {
    this._router.navigate(['entity-search']);
  }

  arrayFrom(data: string | any[]) {
    if (typeof data == 'string') {
      let arr = Array.from(data.split(','));
      return arr;
    } else {
      return data;
    }
  }

  getDisplayTitle(id: string) {
    let place = IdTranslator.fromId(id);
    if (place.fields.hasOwnProperty('displayTitle')) {
      return place.fields.displayTitle;
    }
    return '';
  }

  getGroupName(id: string) {
    let group = IdTranslator.fromId(id);
    if (group.fields.hasOwnProperty('groupName')) {
      return group.fields.groupName;
    }
    return '';
  }

  getYear(id: string) {
    let year = IdTranslator.fromId(id);
    if (year.fields.hasOwnProperty('formattedYear')) {
      return year.fields.formattedYear;
    }
    return '';
  }

  getChapterDisplay(id: string) {
    let chap = IdTranslator.fromId(id);
    if (chap.fields.hasOwnProperty('book')) {
      let bookId = chap.fields.book[0];
      let chapterNum = chap.fields.chapterNum;
      let bookName = IdTranslator.fromId(bookId).fields.bookName;
      return `${bookName} ${chapterNum}`;
    }
    return '';
  }

  getBookDisplay(id: string) {
    let book = IdTranslator.fromId(id);
    return book.fields.bookName;
  }

  getVerse(id: string) {
    let verse = IdTranslator.fromId(id);
    let chapter = IdTranslator.fromId(verse.fields.chapter[0]);
    let book = IdTranslator.fromId(verse.fields.book[0]);
    return `${book.fields.bookName} ${chapter.fields.chapterNum}, ${verse.fields.verseNum}`;
  }

  getPersonByLookup(lookup: string) {
    let person = IdTranslator.fromPersonLookup(lookup);
    if (person != undefined) {
      return person.fields.displayTitle;
    }
    return lookup;
  }

  data: any[] = [];
}
