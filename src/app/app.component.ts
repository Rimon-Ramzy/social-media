import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './authentication/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'social-media';
  showSidebar = true;
  constructor(public authService: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (location.pathname != "/setting" && location.pathname != "/setting/account" && location.pathname != "/setting/notification" && location.pathname != "/setting/securety") {
        this.showSidebar = true;
      } else {
        this.showSidebar = false;
      }
    });
    const routerOutlit: any = document.querySelector(".router-outlit")
  }
}
