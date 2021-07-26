import { NumberSymbol } from "@angular/common";

export class Place{ 
    constructor(isDummy?:boolean){
        if(isDummy){
            this.id = "dummyData"
        }
    }
    public id!:string;
    public fields!:{
        placeLookup:string,
        status:string,
        displayTitle:string,
        ambiguous:boolean,
        duplicate_of:string[],
        placeID:number,
        latitude:string,
        longitude:string,
        kjvName:string,
        esvName:string,
        featureType:string,
        openBibleLat:string,
        openBibleLong:string,
        rootID:string[],
        precision:string,
        aliases:string | string[],
        comment:string,
        verses:string[],
        verseCount:number,
        eastons:string[],
        dictText:string[],
        recogitoUri:string,
        recogitoLat:string,
        recogitoLon:string,
        peopleBorn:string[],
        peopleDied:string[],
        recogitoStatus:string,
        recogitoComments:string,
        recogitoType:string,
        recogitoLabel:string,
        recogitoUID:string,
        booksWritten:string[],
        eventsHere:string[],
        alphaGroup:string,
        slug:string
    };
    public createdTime!:string;
    public modified!:string;
}