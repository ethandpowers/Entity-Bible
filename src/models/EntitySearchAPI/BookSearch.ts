import { Book } from '../Book';
import { IdTranslator } from '../IdTranslator';

export class BookSearch {
  static GetData(searchParam: string, searchValue: string) {
    if (searchParam === 'Title') {
      return this.GetByTitle(searchValue);
    } else if (searchParam === 'Short Name') {
      return this.GetByShortName(searchValue);
    } else if (searchParam === 'Category') {
      return this.GetByCategory(searchValue);
    } else if (searchParam === 'Order') {
      return this.GetByOrder(searchValue);
    } else if (searchParam === 'Writer') {
      return this.GetByWriter(searchValue);
    } else if (searchParam === 'Year Written') {
      return this.GetByYear(searchValue);
    } else if (searchParam === 'Place Written') {
      return this.GetByPlace(searchValue);
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
    let data: Book[] = <Book[]>require('src/assets/json/books.json');
    let results: Book[] = [];
    data.forEach((item) => {
      if (item.fields.bookName.toLowerCase() == str.toLowerCase()) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByShortName(str: string) {
    let data: Book[] = <Book[]>require('src/assets/json/books.json');
    let results: Book[] = [];
    data.forEach((item) => {
      if (item.fields.shortName.toLowerCase() == str.toLowerCase()) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByCategory(str: string) {
    let data: Book[] = <Book[]>require('src/assets/json/books.json');
    let results: Book[] = [];
    data.forEach((item) => {
      if (item.fields.bookDiv.toLowerCase().includes(str.toLowerCase())) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByOrder(str: string) {
    let data: Book[] = <Book[]>require('src/assets/json/books.json');
    let results: Book[] = [];
    data.forEach((item) => {
      if (item.fields.bookOrder == parseInt(str)) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByWriter(str: string) {
    let data: Book[] = <Book[]>require('src/assets/json/books.json');
    let results: Book[] = [];
    if (str != undefined) {
      data.forEach((item) => {
        if (item.fields.hasOwnProperty('writers')) {
          let arr = this.arrayFrom(item.fields.writers);
          arr.forEach((element) => {
            if (element != null) {
              let pushed = false;
              if (
                IdTranslator.fromPersonLookup(
                  element
                ).fields.name.toLowerCase() == str.toLowerCase() ||
                IdTranslator.fromPersonLookup(
                  element
                ).fields.displayTitle.toLowerCase() == str.toLowerCase()
              ) {
                results.push(item);
                pushed = true;
              }

              if (!pushed) {
                if (
                  IdTranslator.fromPersonLookup(element).fields.hasOwnProperty(
                    'alsoCalled'
                  )
                ) {
                  this.arrayFrom(
                    IdTranslator.fromPersonLookup(element).fields.alsoCalled
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

  static GetByYear(str: string) {
    let data: Book[] = <Book[]>require('src/assets/json/books.json');
    let results: Book[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('yearWritten')) {
        let year = IdTranslator.fromId(item.fields.yearWritten[0]);
        if (
          year.fields.formattedYear.toLowerCase() == str.toLowerCase() ||
          year.fields.yearNum.toLowerCase() == str.toLowerCase()
        ) {
          results.push(item);
        }
      }
    });
    return results;
  }

  static GetByPlace(str: string) {
    let data: Book[] = <Book[]>require('src/assets/json/books.json');
    let results: Book[] = [];
    if (str != undefined) {
      data.forEach((item) => {
        if (item.fields.hasOwnProperty('placeWritten')) {
          let arr = this.arrayFrom(item.fields.placeWritten);
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
                  IdTranslator.fromId(element).fields.hasOwnProperty(
                    'aliases'
                  )
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
}
