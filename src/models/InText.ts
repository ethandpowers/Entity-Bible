import { PersonSearch } from "./EntitySearchAPI/PersonSearch";
import { PlaceSearch } from "./EntitySearchAPI/PlaceSearch";
import { IdTranslator } from "./IdTranslator";
import { Person } from "./Person";

export class InText {
    static GetPerson(str:string){
        let person = undefined;
        person = IdTranslator.fromPersonLookup(str)
        if(person == undefined){
            person = PersonSearch.GetByName(str)
        }
        if(person == undefined){
            person = PersonSearch.GetByDisplayTitle(str)
        }
        if(person == undefined){
            person = PersonSearch.GetByAlsoCalled(str)
        }
        return person;
    }

    static GetPlace(str:string){
        let place = undefined;
        place = PlaceSearch.GetByPlaceLookup(str)
        return place;
    }
}