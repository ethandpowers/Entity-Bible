import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { title } from 'process';
import { Book } from 'src/models/Book';
import { Chapter } from 'src/models/Chapter';
import { BookSearch } from 'src/models/EntitySearchAPI/BookSearch';
import { IdTranslator } from 'src/models/IdTranslator';

@Component({
  selector: 'app-bible-select',
  templateUrl: './bible-select.component.html',
  styleUrls: ['./bible-select.component.css'],
})
export class BibleSelectComponent implements OnInit {
  bookValue: string = '';
  bookValueControl = new FormControl('', Validators.required);
  bookObject:any = undefined;
  constructor(private _router:Router) { }

  ngOnInit(): void { }

  bookSelect(book: string) {
    let res = BookSearch.GetByTitle(book);
    this.bookObject = res;
    if (res.length > 0) {
      let chapters = res[0].fields.chapters;
      this.chapters = Array.from(chapters);
    }
  }

  getChapterNum(id:string){
    let chapter:Chapter = IdTranslator.fromId(id);
    return chapter.fields.chapterNum;
  }

  navToChapter(id:string){
    let bookChap = [this.bookObject, id]
    this._router.navigate(['bible-chapter'], {
      state: { data: bookChap },
    });
  }

  chapters: string[] = [];

  books = [
    'Genesis',
    'Exodus',
    'Leviticus',
    'Numbers',
    'Deuteronomy',
    'Joshua',
    'Judges',
    'Ruth',
    '1 Samuel',
    '2 Samuel',
    '1 Kings',
    '2 Kings',
    '1 Chronicles',
    '2 Chronicles',
    'Ezra',
    'Nehemiah',
    'Esther',
    'Job',
    'Psalms',
    'Proverbs',
    'Ecclesiastes',
    'Song of Solomon',
    'Isaiah',
    'Jeremiah',
    'Lamentations',
    'Ezekiel',
    'Daniel',
    'Hosea',
    'Joel',
    'Amos',
    'Obadiah',
    'Jonah',
    'Micah',
    'Nahum',
    'Habakkuk',
    'Zephaniah',
    'Haggai',
    'Zechariah',
    'Malachi',
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    '1 Corinthians',
    '2 Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    '1 Thessalonians',
    '2 Thessalonians',
    '1 Timothy',
    '2 Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    '1 Peter',
    '2 Peter',
    '1 John',
    '2 John',
    '3 John',
    'Jude',
    'Revelation',
  ];
}
