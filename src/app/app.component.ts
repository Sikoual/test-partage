import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from './_shared/user.service'
import { GreetingComponent } from './greeting/greeting.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GreetingComponent],
  template: `
  <app-greeting [user]="user$ | async"/>
  <button (click)="init()">Init/Reset</button>
  <button (click)="changeUserName()">Change name</button>
  `,
  styles: ``
})
export class AppComponent {
  public userService = inject(UserService);
  public user$ = this.userService.getUser();

  public changeUserName(){
    this.userService.changeUserName();
  }

  public init(){
    this.userService.init();
  }
}
