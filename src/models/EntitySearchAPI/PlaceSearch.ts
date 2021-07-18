import { IdTranslator } from '../IdTranslator';
import { Person } from '../Person';
import { Place } from '../Place';

export class PlaceSearch {
  static GetData(searchParam: string, searchValue: string) {
    if (searchParam === 'Display Title') {
      return this.GetByDisplayTitle(searchValue);
    } else if (searchParam === 'Aliases') {
      return this.GetByAlias(searchValue);
    } else if (searchParam === 'People Born') {
      return this.GetByPeopleBorn(searchValue);
    } else if (searchParam === 'People Died') {
      return this.GetByPeopleDied(searchValue);
    } else {
      return [];
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

  static GetByDisplayTitle(str: string) {
    let data: Place[] = <Place[]>require('src/assets/json/places.json');
    let results: Place[] = [];
    data.forEach((item) => {
      if (item.fields.displayTitle.toLowerCase() == str.toLowerCase()) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByAlias(str: string) {
    let data: Place[] = <Place[]>require('src/assets/json/places.json');
    let results: Place[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('aliases')) {
        this.arrayFrom(item.fields.aliases).forEach((element) => {
          if (element.toLowerCase() == str.toLowerCase()) {
            results.push(item);
          }
        });
      }
    });
    return results;
  }

  static GetByPeopleBorn(str: string) {
    let data: Place[] = <Place[]>require('src/assets/json/places.json');
    let results: Place[] = [];
    if (str != undefined) {
      data.forEach((item) => {
        if (item.fields.hasOwnProperty('peopleBorn')) {
          this.arrayFrom(item.fields.peopleBorn).forEach((element) => {
            let pushed = false;
            if (
              IdTranslator.fromId(element).fields.name.toLowerCase() ==
                str.toLowerCase() ||
              IdTranslator.fromId(element).fields.displayTitle.toLowerCase() ==
                str.toLowerCase()
            ) {
              results.push(item);
              pushed = true;
            }

            if (!pushed) {
              if (
                IdTranslator.fromId(element).fields.hasOwnProperty('alsoCalled')
              ) {
                this.arrayFrom(
                  IdTranslator.fromId(element).fields.alsoCalled
                ).forEach((alias) => {
                  if (alias.toLowerCase() == str.toLowerCase()) {
                    results.push(item);
                  }
                });
              }
            }
          });
        }
      });
    }
    return results;
  }

  static GetByPeopleDied(str: string) {
    let data: Place[] = <Place[]>require('src/assets/json/places.json');
    let results: Place[] = [];
    if (str != undefined) {
      data.forEach((item) => {
        if (item.fields.hasOwnProperty('peopleDied')) {
          this.arrayFrom(item.fields.peopleDied).forEach((element) => {
            let pushed: boolean = false;
            if (
              IdTranslator.fromId(element).fields.name.toLowerCase() ==
                str.toLowerCase() ||
              IdTranslator.fromId(element).fields.displayTitle.toLowerCase() ==
                str.toLowerCase()
            ) {
              results.push(item);
              pushed = true;
            }
            if (!pushed) {
              if (
                IdTranslator.fromId(element).fields.hasOwnProperty('alsoCalled')
              ) {
                this.arrayFrom(
                  IdTranslator.fromId(element).fields.alsoCalled
                ).forEach((alias) => {
                  if (alias.toLowerCase() == str.toLowerCase()) {
                    results.push(item);
                  }
                });
              }
            }
          });
        }
      });
    }
    return results;
  }
}
