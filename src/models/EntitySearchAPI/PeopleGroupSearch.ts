import { IdTranslator } from '../IdTranslator';
import { PeopleGroup } from '../PeopleGroup';

export class PeopleGroupSearch {
  static GetData(searchParam: string, searchValue: string) {
    if (searchParam === 'Group Name') {
      return this.GetByGroupName(searchValue);
    } else if (searchParam === 'Members') {
      return this.GetByMembers(searchValue);
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

  static GetByGroupName(str: string) {
    let data: PeopleGroup[] = <PeopleGroup[]>(
      require('src/assets/json/peopleGroups.json')
    );
    let results: PeopleGroup[] = [];
    data.forEach((item) => {
      if (item.fields.hasOwnProperty('groupName')) {
        this.arrayFrom(item.fields.groupName).forEach((element) => {
          if (element.toLowerCase().includes(str.toLowerCase())) {
            results.push(item);
          }
        });
      }
    });
    return results;
  }

  static GetByMembers(str: string) {
    let data: PeopleGroup[] = <PeopleGroup[]>(
      require('src/assets/json/peopleGroups.json')
    );
    let results: PeopleGroup[] = [];
    if (str != undefined) {
      data.forEach((item) => {
        if (item.fields.hasOwnProperty('members')) {
          this.arrayFrom(item.fields.members).forEach((element) => {
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
}
