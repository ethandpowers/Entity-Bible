import { DictItem } from './DictItem';

export class LocalDictionary {
  static GetData(searchParam: string, searchValue: string) {
    if (searchParam == 'Term Label') {
      return this.GetByTermLabel(searchValue);
    } else if (searchParam == 'Dictionary Lookup') {
      return this.GetByDictionaryLookup(searchValue);
    } else if (searchParam == 'Index') {
      return this.GetByIndex(searchValue);
    } else if (searchParam == 'Text Contains') {
      return this.GetByTextContains(searchValue);
    } else {
      return [];
    }
  }

  static GetByTermLabel(label: string) {
    let dictionaryData: DictItem[] = <DictItem[]>(
      require('src/assets/json/easton.json')
    );
    let results: DictItem[] = [];
    dictionaryData.forEach((item) => {
      if (item.fields.termLabel.toLowerCase().includes(label.toLowerCase())) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByDictionaryLookup(lookup: string) {
    let dictionaryData: DictItem[] = <DictItem[]>(
      require('src/assets/json/easton.json')
    );
    let results: DictItem[] = [];
    dictionaryData.forEach((item) => {
      if (item.fields.dictLookup.toLowerCase() == lookup.toLowerCase()) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByIndex(lookup: string) {
    let dictionaryData: DictItem[] = <DictItem[]>(
      require('src/assets/json/easton.json')
    );
    let results: DictItem[] = [];
    dictionaryData.forEach((item) => {
      if (item.fields.index == parseInt(lookup)) {
        results.push(item);
      }
    });
    return results;
  }

  static GetByTextContains(label: string) {
    let dictionaryData: DictItem[] = <DictItem[]>(
      require('src/assets/json/easton.json')
    );
    let results: DictItem[] = [];
    dictionaryData.forEach((item) => {
      if (item.fields.hasOwnProperty('dictText')) {
        if (item.fields.dictText.toLowerCase().includes(label.toLowerCase())) {
          results.push(item);
        }
      }
    });

    return results;
  }
}
