export class Person {
  constructor(isDummy?: boolean) {
    if (isDummy) {
      this.id = 'dummyData';
    }
  }
  public id!: string;
  public fields!: {
    personLookup: string;
    personID: number;
    name: string;
    isProperName: boolean;
    gender: string;
    birthYear: string[];
    deathYear: string[];
    memberOf: string[];
    birthPlace: string[];
    deathPlace: string[];
    dictionaryLink: string;
    dictionaryText: string;
    verses: string[];
    siblings: string[];
    mother: string[];
    father: string[];
    children: string[];
    displayTitle: string;
    status: string;
    partners: string[];
    eastons: string[];
    timeline: string[];
    verseCount: number;
    minYear: number;
    maxYear: number;
    alphaGroup: string;
    slug: string;
    "Easton's Count": number;
    dictText: string[];
    alsoCalled: string[] | string;
    ambiguous: boolean;
    'Disambiguation (temp)': string[];
    eventGroups: string[];
    events: string[];
    surname: string;
    occupations: string[];
    halfSiblingsSameMother: string[];
    halfSiblingsSameFather: string[];
    chaptersWritten: string[];
  };
  public createdTime!: string;
  public modified!: string;
}
