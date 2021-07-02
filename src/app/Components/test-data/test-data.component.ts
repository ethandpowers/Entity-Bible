import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as rawData from 'src/assets/json/places.json';
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
    //const collection = db.collection('places');
    this.data = <Place[]><unknown>rawData;
    this.data = Array.from(this.data);
    
    this.data.forEach((item) => {
      if(item.fields.aliases != undefined){
        if(typeof item.fields.aliases == 'string'){
          let str:string = item.fields.aliases;
          item.fields.aliases = Array.from(str.split(','));
        } 
      }
    });

    console.log(this.data);
    this.data.forEach((value:any) => {
      //collection.add(value);
    })
  }

  ngOnInit(): void {
  }
  data:Place[]
}
