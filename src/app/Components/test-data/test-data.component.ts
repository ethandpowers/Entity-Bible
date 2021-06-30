import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import * as rawData from 'src/assets/json/verses.json';
import { Book } from 'src/models/Book';
import { Chapter } from 'src/models/Chapter';
import { DictItem } from 'src/models/DictItem';
import { Person } from 'src/models/Person';
import { Event } from 'src/models/Event';
import { PeopleGroup } from 'src/models/PeopleGroup';
import { Period } from 'src/models/Period';
import { Place } from 'src/models/Place';
import { Verse } from 'src/models/Verse';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {

  constructor(private db:AngularFirestore){
    //const collection = db.collection('verses');
    //this.data = <Verse[]><unknown>rawData;
    //this.data = Array.from(this.data)
    //console.log(this.data)
    //this.data.forEach((value) => {
      //collection.add(value);
    //})
  }

  ngOnInit(): void {
  }
  //data:Verse[]
}