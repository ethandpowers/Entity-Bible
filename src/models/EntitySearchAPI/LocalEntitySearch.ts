import { BookSearch } from './BookSearch';
import { PeopleGroupSearch } from './PeopleGroupSearch';
import { PeriodSearch } from './PeriodSearch';
import { PersonSearch } from './PersonSearch';
import { PlaceSearch } from './PlaceSearch';
import { EventSearch } from './EventSearch';

export class LocalEntitySearch {
  static GetData(searchType: string, searchParam: string, searchValue: string) {
    if (searchType == 'Person') {
      return PersonSearch.GetData(searchParam, searchValue);
    } else if (searchType == 'Place') {
      return PlaceSearch.GetData(searchParam, searchValue);
    } else if (searchType == 'People Group') {
      return PeopleGroupSearch.GetData(searchParam, searchValue);
    } else if (searchType == 'Period') {
      return PeriodSearch.GetData(searchParam, searchValue);
    } else if (searchType == 'Book') {
      return BookSearch.GetData(searchParam, searchValue);
    } else if (searchType == 'Book') {
      return BookSearch.GetData(searchParam, searchValue);
    } else if (searchType == 'Event') {
      return EventSearch.GetData(searchParam, searchValue);
    } else {
      return [];
    }
  }
}
