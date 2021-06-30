export class Chapter{ 
    constructor(isDummy?:boolean){
        if(isDummy){
            this.id = "dummyData"
        }
    }
    public id!:string;
    public fields!:{
        osisRef:string,
        book:string[],
        chapterNum:number,
        writer:string[],
        verses:string[],
        slug:string,
        peopleCount:number,
        placesCount:number,
        modified:string,
        'writer count':number
    };
    public createdTime!:string
}