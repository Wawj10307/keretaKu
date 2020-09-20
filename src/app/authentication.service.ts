import { Injectable, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
    checkUser = true;

    private status: Subject<boolean> = new Subject<boolean>();
    userStatus$ = this.status.asObservable();

  constructor(public authC: AngularFireAuth, private router: Router, private route: ActivatedRoute ) {
    setTimeout(() => {
      this.status.next(true);
    }, 500);
  }

    login(email: string, password: string): void {
        this.authC.signInWithEmailAndPassword(email, password).then((success) => {
            console.log('Redirect to dashboard');
            localStorage.setItem('currentUser', JSON.stringify(success));
            this.status.next(false);
            this.router.navigate(['/dashboard'], { relativeTo: this.route});
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            if (errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-email'){
              alert('Wrong password or email');
            }
        });
    }
    logout(): void{
        this.authC.signOut().then((success) => {
          localStorage.removeItem('currentUser');
          this.router.navigate(['/homepage']);
          this.status.next(true);
        });
    }
}
