import { NumberSymbol } from "@angular/common";

export class PeopleGroup{ 
    constructor(isDummy?:boolean){
        if(isDummy){
            this.id = "dummyData"
        }
    }
    public id!:string;
    public fields!:{
        groupName:string,
        members:string[],
        events_dev:string[],
        verses:string[]
    };
    public createdTime!:string;
    public modified!:string;
}