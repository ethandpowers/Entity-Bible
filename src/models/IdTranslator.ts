import { isNgTemplate } from '@angular/compiler';
import { AngularFirestore } from '@angular/fire/firestore';

export class IdTranslator {
  public static fromPersonLookup(str: string) {
    if (str != '') {
      let data: any[] = require('src/assets/json/people.json');
      let result = IdTranslator.tryMatchPersonLookup(str, data);
      if (result != 'None Found') {
        return result;
      }
    }
  }

  public static fromId(str: string) {
    if (str != '') {
      let data: any[] = require('src/assets/json/books.json');
      let result = IdTranslator.tryMatchId(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/chapters.json');
      result = IdTranslator.tryMatchId(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/events.json');
      result = this.tryMatchId(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/people.json');
      result = this.tryMatchId(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/peopleGroups.json');
      result = this.tryMatchId(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/periods.json');
      result = this.tryMatchId(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/places.json');
      result = this.tryMatchId(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/verses.json');
      result = this.tryMatchId(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/easton.json');
      result = this.tryMatchId(str, data);
      if (result != 'None Found') {
        return result;
      }
    }
  }

  public static fromName(str: string) {
    if (str != '') {
      let data: any[] = require('src/assets/json/books.json');
      let result = this.tryMatchObjectName(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/chapters.json');
      result = this.tryMatchObjectName(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/events.json');
      result = this.tryMatchObjectName(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/people.json');
      result = this.tryMatchObjectName(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/peopleGroups.json');
      result = this.tryMatchObjectName(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/periods.json');
      result = this.tryMatchObjectName(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/places.json');
      result = this.tryMatchObjectName(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/verses.json');
      result = this.tryMatchObjectName(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/easton.json');
      result = this.tryMatchObjectName(str, data);
      if (result != 'None Found') {
        return result;
      }
    }
  }

  public static fromDisplayTitle(str: string) {
    if (str != '') {
      let data: any[] = require('src/assets/json/books.json');
      let result = this.tryMatchDisplayTitle(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/chapters.json');
      result = this.tryMatchDisplayTitle(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/events.json');
      result = this.tryMatchDisplayTitle(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/people.json');
      result = this.tryMatchDisplayTitle(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/peopleGroups.json');
      result = this.tryMatchDisplayTitle(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/periods.json');
      result = this.tryMatchDisplayTitle(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/places.json');
      result = this.tryMatchDisplayTitle(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/verses.json');
      result = this.tryMatchDisplayTitle(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/easton.json');
      result = this.tryMatchDisplayTitle(str, data);
      if (result != 'None Found') {
        return result;
      }
    }
  }

  public static fromAlias(str: string) {
    if (str != '') {
      let data: any[] = require('src/assets/json/books.json');
      let result = this.tryMatchAliases(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/chapters.json');
      result = this.tryMatchAliases(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/events.json');
      result = this.tryMatchAliases(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/people.json');
      result = this.tryMatchAliases(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/peopleGroups.json');
      result = this.tryMatchAliases(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/periods.json');
      result = this.tryMatchAliases(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/places.json');
      result = this.tryMatchAliases(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/verses.json');
      result = this.tryMatchAliases(str, data);
      if (result != 'None Found') {
        return result;
      }
      data = require('src/assets/json/easton.json');
      result = this.tryMatchAliases(str, data);
      if (result != 'None Found') {
        return result;
      }
    }
  }

  static arrayFrom(data: string | any[]) {
    if (typeof data == 'string') {
      let arr = Array.from(data.split(','));
      return arr;
    } else {
      return data;
    }
  }

  private static tryMatchId(id: string, arr: any[]) {
    let match: any = 'None Found';
    arr.forEach((obj) => {
      if (obj.hasOwnProperty('id')) {
        if (obj.id == id) {
          match = obj;
        }
      }
    });
    return match;
  }

  private static tryMatchObjectName(str: string, arr: any[]) {
    let match: any = 'None Found';
    arr.forEach((obj) => {
      if (obj.fields.hasOwnProperty('Name')) {
        if (obj.fields.Name.toLowerCase() == str.toLowerCase()) {
          match = obj;
        }
      }
    });
    return match;
  }

  private static tryMatchDisplayTitle(str: string, arr: any[]) {
    let match: any = 'None Found';
    arr.forEach((obj) => {
      if (obj.fields.hasOwnProperty('displayTitle')) {
        if (obj.fields.displayTitle.toLowerCase() == str.toLowerCase()) {
          match = obj;
        }
      }
    });
    return match;
  }

  private static tryMatchAliases(str: string, arr: any[]) {
    let match: any = 'None Found';
    arr.forEach((obj) => {
      if (obj.fields.hasOwnProperty('aliases')) {
        let aliases: string[] = this.arrayFrom(obj.fields.aliases);
        if (aliases != undefined) {
          aliases.forEach((alias) => {
            if (alias.toLowerCase() == str.toLowerCase()) {
              match = obj;
            }
          });
        }
      }
    });
    return match;
  }

  private static tryMatchPersonLookup(str: string, arr: any[]) {
    let match: any = 'None Found';
    arr.forEach((obj) => {
      if (obj != undefined && obj.hasOwnProperty('fields') && str != null) {
        if (obj.fields.hasOwnProperty('personLookup')) {
          if (obj.fields.personLookup.toLowerCase() == str.toLowerCase()) {
            match = obj;
          }
        }
      }
    });
    return match;
  }
}
