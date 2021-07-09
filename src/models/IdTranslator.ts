import { AngularFirestore } from '@angular/fire/firestore';

export class IdTranslator {
  constructor(private db: AngularFirestore) {
    this.db = db;
  }

  public toId(str: string) {
    if (str != '') {
      let booksSub = this.db
        .collection('books', (query) => query.where('id', '==', str))
        .valueChanges()
        .subscribe((val) => {
          console.log(val);
          if(val.length < 1){
              console.log('No Results')
          }
          booksSub.unsubscribe();
          console.log('unsubscribed');
          return val;
        });
    }
  }
}
