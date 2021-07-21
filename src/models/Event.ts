export class Event{ 
    constructor(isDummy?:boolean){
        if(isDummy){
            this.id = "dummyData"
        }
    }
    public id!:string;
    public fields!:{
        title:string,
        startDate:string,
        duration:string,
        participants:string[],
        locations:string[],
        verses:string[],
        modified:string,
        verseSort:string,
        sortKey:number,
        'people (from verses)':string[],
        'places (from verses)':string[],
        partOf:string[],
        groups:string[],
        predecessor:string[]
    };
    public createdTime!:string
}