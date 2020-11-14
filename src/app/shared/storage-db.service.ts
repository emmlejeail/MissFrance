import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StorageDBService {

  constructor(private firestore: AngularFirestore) { }

  saveToFirestore(){console.log("I will store once the function is implemented")}

  getMissFromFirestore() { 
    return this.firestore.collection("miss").snapshotChanges();
  }
  
}
