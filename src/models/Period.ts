import { NumberSymbol } from "@angular/common";

export class Period{ 
    constructor(isDummy?:boolean){
        if(isDummy){
            this.id = "dummyData"
        }
    }
    public id!:string;
    public fields!:{
        yearNum:number,
        formattedYear:string,
        isoYear:number,
        'BC-AD':string,
        peopleBorn:string[],
        peopleDied:string[],
        events:string[],
        booksWritten:string[]
    };
    public createdTime!:string;
    public modified!:string;
}