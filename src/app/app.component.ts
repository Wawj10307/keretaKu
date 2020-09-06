import { Component} from '@angular/core';
import { AuthenticationService } from '../app/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
    checkUser = true;
    title = 'webPage';
    userStat = true;
    constructor(private auth: AuthenticationService){
        this.auth.userStatus$.subscribe(value => {
            console.log(value);
            this.checkUser = value;
        });
    }
    logout(): void{
       this.auth.logout();
    }
}
