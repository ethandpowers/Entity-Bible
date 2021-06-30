export class Book{ 
    constructor(isDummy?:boolean){
        if(isDummy){
            this.id = "dummyData"
        }
    }
    public id!:string;
    public fields!:{
        bookDiv:string,
        bookName:string,
        bookOrder:number,
        chapterCount:number,
        chapters:string[],
        osisName:string,
        peopleCount:number,
        placeCount:number,
        shortName:string,
        slug:string,
        testament:string,
        verseCount:number,
        verses:string[],
        writers:string[],
        yearWritten:string[],
        placeWritten:string[]
        
    };
    public createdTime!:string
}