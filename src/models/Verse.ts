export class Verse{ 
    constructor(isDummy?:boolean){
        if(isDummy){
            this.id = "dummyData"
        }
    }
    public id!:string;
    public fields!:{
        osisRef:string,
        status:string,
        verseID:string,
        book:string[],
        chapter:string[],
        verseNum:string,
        verseText:string,
        richText:string,
        mdText:string,
        people:string[],
        peopleCount:number,
        places:string[],
        placesCount:number,
        yearNum:number,
        peopleGroups:string[],
        eventsDescribed:string[]
    };
    public createdTime!:string
}