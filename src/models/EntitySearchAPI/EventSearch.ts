import { IdTranslator } from '../IdTranslator';
import { Event } from '../Event';

export class EventSearch {
  static GetData(searchParam: string, searchValue: string) {
    if (searchParam === 'Title') {
      return this.GetByTitle(searchValue);
    } else if (searchParam == 'Participant') {
      return this.GetByParticipant(searchValue);
    } else if (searchParam == 'Location') {
      return this.GetByLocation(searchValue);
    }  else if (searchParam == 'Part Of') {
        return this.GetByPartOf(searchValue);
      } else {
      return [];
    }
  }

  static arrayFrom(data: string | any[]) {
    if (typeof data == 'string') {
      data = Array.from(data.split(','));
      data.forEach((element) => {
        element = element.trim();
      });
      return data;
    }
    let str = data.toString();
    let arr = Array.from(str.split(','));
    let finalArr: string[] = [];
    arr.forEach((element) => {
      let trimmed: string = element.trim();
      if (trimmed.length > 0) {
        finalArr.push(trimmed);
      }
    });
    return finalArr;
  }

  static GetByTitle(str: string) {
    let data: Event[] = <Event[]>require('src/assets/json/events.json');
    let results: Event[] = [];
    data.forEach((item) => {
      if (item.fields.title.toLowerCase().includes(str.toLowerCase())) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByParticipant(str: string) {
    let data: Event[] = <Event[]>require('src/assets/json/events.json');
    let results: Event[] = [];
    if (str != undefined) {
      data.forEach((item) => {
        if (item.fields.hasOwnProperty('participants')) {
          let arr = this.arrayFrom(item.fields.participants);
          arr.forEach((element) => {
            if (element != null) {
              let pushed = false;
              if (
                IdTranslator.fromId(element).fields.name.toLowerCase() ==
                  str.toLowerCase() ||
                IdTranslator.fromId(
                  element
                ).fields.displayTitle.toLowerCase() == str.toLowerCase()
              ) {
                results.push(item);
                pushed = true;
              }

              if (!pushed) {
                if (
                  IdTranslator.fromId(element).fields.hasOwnProperty(
                    'alsoCalled'
                  )
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
            }
          });
        }
      });
    }
    return results;
  }

  static GetByLocation(str: string) {
    let data: Event[] = <Event[]>require('src/assets/json/events.json');
    let results: Event[] = [];
    if (str != undefined) {
      data.forEach((item) => {
        if (item.fields.hasOwnProperty('locations')) {
          let arr = this.arrayFrom(item.fields.locations);
          arr.forEach((element) => {
            if (element != null) {
              let pushed = false;
              if (
                IdTranslator.fromId(
                  element
                ).fields.displayTitle.toLowerCase() == str.toLowerCase()
              ) {
                results.push(item);
                pushed = true;
              }

              if (!pushed) {
                if (
                  IdTranslator.fromId(element).fields.hasOwnProperty('aliases')
                ) {
                  this.arrayFrom(
                    IdTranslator.fromId(element).fields.aliases
                  ).forEach((alias) => {
                    if (alias.toLowerCase() == str.toLowerCase()) {
                      results.push(item);
                    }
                  });
                }
              }
            }
          });
        }
      });
    }
    return results;
  }

  static GetByPartOf(str: string) {
    let data: Event[] = <Event[]>require('src/assets/json/events.json');
    let results: Event[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('partOf')) {
        this.arrayFrom(item.fields.partOf).forEach((element) => {
            let event = IdTranslator.fromId(element);
          if (event.fields.title.toLowerCase().includes(str.toLowerCase())) {
            results.push(item);
          }
        });
      }
    });
    return results;
  }
}
