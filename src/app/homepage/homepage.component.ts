import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<any[]>;
    constructor(private afs: AngularFirestore){
        this.itemsCollection = afs.collection('items');
        this.items = this.itemsCollection.valueChanges();
    }
    ngOnInit(): void {
    }
}
