
export class DictItem{ 
    constructor(isDummy?:boolean){
        if(isDummy){
            this.id = "dummyData"
        }
    }
    public id!:string;
    public fields!:{
        dictLookup:string,
        termID:string,
        termLabel:string,
        def_id:string,
        has_list:string,
        itemNum:number,
        matchType:string,
        matchSlugs:string,
        dictText:string,
        index:number,
        personLookup:string[],
        placeLookup:string[]
    };
    public createdTime!:string
}