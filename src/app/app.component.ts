import { Component} from '@angular/core';
import { AuthenticationService } from '../app/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
    checkUser = true;
    title = 'webPage';
    userStat = true;
    constructor(private authC: AuthenticationService, private authCheck: AngularFireAuth){
        this.authC.userStatus$.subscribe(value => { //Using JSON observable to monitor Authentication Service user login
            // console.log(value);
            // this.checkUser = value;
            if (localStorage.getItem('currentUser')) {
              this.checkUser = false;
              console.log('User exist');
            }else{
              this.checkUser = true;
              console.log('No user');
            }
        });
        authCheck.onAuthStateChanged((success) => { // Replaces previous function
          if (success) {
            this.checkUser = false;
            console.log('User logged in');
          }
        });
    }
    logout(): void{
       this.authC.logout();
    }
}
