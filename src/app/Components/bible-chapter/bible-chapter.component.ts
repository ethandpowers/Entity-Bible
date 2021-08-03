import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/models/Book';
import { Chapter } from 'src/models/Chapter';
import { IdTranslator } from 'src/models/IdTranslator';
import { InText } from 'src/models/InText';
import { Verse } from 'src/models/Verse';

@Component({
  selector: 'app-bible-chapter',
  templateUrl: './bible-chapter.component.html',
  styleUrls: ['./bible-chapter.component.css']
})
export class BibleChapterComponent implements OnInit {

  htmlIn: string = '';
  data: any[];
  chapterObject: any = undefined;
  elementRef: ElementRef;

  constructor(private _router: Router, elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.data = history.state.data;
    if (this.data == undefined) {
      this._router.navigate(['404']);
      return;
    }
    this.chapterObject = IdTranslator.fromId(this.data[1]);
  }

  ngOnInit(): void { }

  navigate(obj: any) {
    this._router.navigate(['entity-result'], {
      state: { data: [obj] },
    });
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

  getVerses(chapter: Chapter) {
    let chapterText: string = '';
    chapter.fields.verses.forEach((verseId) => {
      let verse: Verse = IdTranslator.fromId(verseId);
      let verseStr = verse.fields.richText;
      chapterText += ' (' + verse.fields.verseNum + ') ' + verseStr;
    });
    let wordArr: string[] = chapterText.split(' ');
    let verseArr: any[] = [];
    wordArr.forEach(word => {
      let trimmedWord = word;
      if (word != undefined && word.length > 0) {
        if (word[0] == '_' || word[word.length - 1] == '_') {
          trimmedWord = word.substring(1, word.length - 1)
        }
        if (word.startsWith('[')) {
          let results = this.getResults(word);
          verseArr.push(results);
        }
        else {
          verseArr.push({ 'type': 'text', 'value': trimmedWord });
        }
      }
    });
    return verseArr;
  }

  getResults(raw: string) {
    let linkTitle = raw.substring(raw.indexOf('[') + 1, raw.lastIndexOf(']'))
    let results = undefined;
    if (raw.substring(raw.indexOf('/') + 1, raw.lastIndexOf('/')) == 'person') {
      let person = raw.substring(raw.lastIndexOf('/') + 1, raw.lastIndexOf(')'))
      results = InText.GetPerson(person)
    }
    else if (raw.substring(raw.indexOf('/') + 1, raw.lastIndexOf('/')) == 'place') {
      let place = raw.substring(raw.lastIndexOf('/') + 1, raw.lastIndexOf(')'))
      results = InText.GetPlace(place)[0];
    }
    else {
      console.log(raw)
    }
    return { 'type': 'link', 'title': linkTitle, 'value': results };
  }

  isLastPage(){
    let book: Book = IdTranslator.fromId(this.chapterObject.fields.book[0]);
    let currentIndex = book.fields.chapters.indexOf(this.chapterObject.id)
    let totalLength = book.fields.chapters.length;
    if(currentIndex == totalLength - 1){
      return true;
    }
    return false;
  }

  isFirstPage(){
    let book: Book = IdTranslator.fromId(this.chapterObject.fields.book[0]);
    let currentIndex = book.fields.chapters.indexOf(this.chapterObject.id)
    if(currentIndex == 0){
      return true;
    }
    return false;
  }
  nextPage() {
      let chap: Chapter = this.chapterObject
      let book: Book = IdTranslator.fromId(chap.fields.book[0]);
      let nextChapterId = book.fields.chapters[book.fields.chapters.indexOf(chap.id) + 1]
      this.chapterObject = IdTranslator.fromId(nextChapterId);
      window.scrollTo(0, 0);
  }

  previousPage() {
    try {
      let chap: Chapter = this.chapterObject
      let book: Book = IdTranslator.fromId(chap.fields.book[0]);
      let nextChapterId = book.fields.chapters[book.fields.chapters.indexOf(chap.id) - 1]
      this.chapterObject = IdTranslator.fromId(nextChapterId);
      window.scrollTo(0, 0);
    } catch {
      console.log('No previous page')
    }
  }

  returnToSelect(){
    this._router.navigate(['bible-select'])
  }
}
