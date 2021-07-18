import { IdTranslator } from "../IdTranslator";
import { Period } from "../Period";

export class PeriodSearch{
    static GetData(searchParam: string, searchValue: string) {
        if (searchParam === 'Year Number') {
          return this.GetByYearNumber(searchValue);
        } else if (searchParam === 'Formatted Year') {
          return this.GetByFormattedYear(searchValue);
        }  else if (searchParam === 'Books Written') {
            return this.GetByBooksWritten(searchValue);
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

      static GetByYearNumber(str: string) {
        let data: Period[] = <Period[]>require('src/assets/json/periods.json');
        let results: Period[] = [];
        data.forEach((item) => {
          if (item.fields.yearNum == parseInt(str)) {
            results.push(item);
          }
        });
        return results;
      }

      static GetByFormattedYear(str: string) {
        let data: Period[] = <Period[]>require('src/assets/json/periods.json');
        let results: Period[] = [];
        data.forEach((item) => {
          if (item.fields.formattedYear.toLocaleLowerCase() == str.toLowerCase()) {
            results.push(item);
          }
        });
        return results;
      }

      static GetByBooksWritten(str: string) {
        let data: Period[] = <Period[]>require('src/assets/json/periods.json');
        let results: Period[] = [];
        data.forEach((item) => {
          if (item.fields.hasOwnProperty('booksWritten')) {
            this.arrayFrom(item.fields.booksWritten).forEach((element) => {
              if (
                  IdTranslator.fromId(element).fields.bookName.toLowerCase() == str.toLowerCase()
                  ) {
                results.push(item);
              }
            });
          }
        });
        return results;
      }
}