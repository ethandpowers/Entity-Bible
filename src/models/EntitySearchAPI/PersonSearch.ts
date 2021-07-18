import { IdTranslator } from '../IdTranslator';
import { Person } from '../Person';

export class PersonSearch {
  static GetData(searchParam: string, searchValue: string) {
    if (searchParam === 'Name') {
      return this.GetByName(searchValue);
    } else if (searchParam == 'Display Title') {
      return this.GetByDisplayTitle(searchValue);
    } else if (searchParam == 'Also Called') {
      return this.GetByAlsoCalled(searchValue);
    } else if (searchParam == 'Birth Place') {
      return this.GetByBirthPlace(searchValue);
    } else if (searchParam == 'Death Place') {
      return this.GetByBirthPlace(searchValue);
    } else if (searchParam == 'Siblings') {
      return this.GetSiblings(searchValue);
    } else if (searchParam == 'Mother') {
      return this.GetByMother(searchValue);
    } else if (searchParam == 'Father') {
      return this.GetByFather(searchValue);
    } else if (searchParam == 'Children') {
      return this.GetByChildren(searchValue);
    } else if (searchParam == 'Partners') {
      return this.GetByPartners(searchValue);
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

  static GetByName(str: string) {
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    data.forEach((item) => {
      if (item.fields.name.toLowerCase().includes(str.toLowerCase())) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByDisplayTitle(str: string) {
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    data.forEach((item) => {
      if (item.fields.displayTitle.toLowerCase().includes(str.toLowerCase())) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByAlsoCalled(str: string) {
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('alsoCalled')) {
        this.arrayFrom(item.fields.alsoCalled).forEach((element) => {
          if (element.toLowerCase() == str.toLowerCase()) {
            results.push(item);
          }
        });
      }
    });
    return results;
  }

  static GetByBirthPlace(str: string) {
    let birthPlace = IdTranslator.fromDisplayTitle(str);
    if (birthPlace == undefined) {
      birthPlace = IdTranslator.fromAlias(str);
    }
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    if (birthPlace != undefined) {
      data.forEach((item) => {
        if (item.fields.hasOwnProperty('birthPlace')) {
          this.arrayFrom(item.fields.birthPlace).forEach((element) => {
            if (
              IdTranslator.fromId(element).fields.displayTitle ==
              birthPlace.fields.displayTitle
            ) {
              results.push(item);
            }
          });
        }
      });
    }
    return results;
  }

  static GetByDeathPlace(str: string) {
    let deathPlace = IdTranslator.fromDisplayTitle(str);
    if (deathPlace == undefined) {
      deathPlace = IdTranslator.fromAlias(str);
    }
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    if (deathPlace != undefined) {
      data.forEach((item) => {
        if (item.fields.hasOwnProperty('deathPlace')) {
          this.arrayFrom(item.fields.deathPlace).forEach((element) => {
            if (
              IdTranslator.fromId(element).fields.displayTitle ==
              deathPlace.fields.displayTitle
            ) {
              results.push(item);
            }
          });
        }
      });
    }
    return results;
  }

  static GetSiblings(str: string) {
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('siblings')) {
        item.fields.siblings.forEach((element) => {
          let person = IdTranslator.fromId(element);
          if(
            person.fields.name.toLowerCase() == str.toLowerCase() || 
            person.fields.displayTitle.toLowerCase() == str.toLowerCase()
            ){
              results.push(item);
          }
        });
      }
    });
    return results;
  }

  static GetByMother(str: string) {
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('mother')) {
        item.fields.mother.forEach((element) => {
          let person = IdTranslator.fromId(element);
          if(
            person.fields.name.toLowerCase() == str.toLowerCase() || 
            person.fields.displayTitle.toLowerCase() == str.toLowerCase()
            ){
              results.push(item);
          }
        });
      }
    });
    return results;
  }

  static GetByFather(str: string) {
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('father')) {
        item.fields.father.forEach((element) => {
          let person = IdTranslator.fromId(element);
          if(
            person.fields.name.toLowerCase() == str.toLowerCase() || 
            person.fields.displayTitle.toLowerCase() == str.toLowerCase()
            ){
              results.push(item);
          }
        });
      }
    });
    return results;
  }

  static GetByPartners(str: string) {
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('partners')) {
        item.fields.partners.forEach((element) => {
          let person = IdTranslator.fromId(element);
          if(
            person.fields.name.toLowerCase() == str.toLowerCase() || 
            person.fields.displayTitle.toLowerCase() == str.toLowerCase()
            ){
              results.push(item);
          }
        });
      }
    });
    return results;
  }

  static GetByChildren(str: string) {
    let data: Person[] = <Person[]>require('src/assets/json/people.json');
    let results: Person[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('children')) {
        item.fields.children.forEach((element) => {
          let person = IdTranslator.fromId(element);
          if(
            person.fields.name.toLowerCase() == str.toLowerCase() || 
            person.fields.displayTitle.toLowerCase() == str.toLowerCase()
            ){
              results.push(item);
          }
        });
      }
    });
    return results;
  }
}
