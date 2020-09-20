import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; liter: string; price: string; sale: string; stock: number; type: string; weight: string; }

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;
    constructor(private afs: AngularFirestore){
        this.itemsCollection = afs.collection<Item>('inventory/engineOil/Moto7');
        this.items = this.itemsCollection.valueChanges();
        console.log(this.items);
    }
    ngOnInit(): void {
    }
}
