import { Component, inject, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from './_shared/user.service'
import { GreetingComponent } from './greeting/greeting.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GreetingComponent],
  template: `
  <app-greeting [name]="name$ | async"/>
  <button (click)="changeUserName()">Change name</button>
  `,
  styles: ``
})
export class AppComponent {
  public userService = inject(UserService);
  public name$ = this.userService.getName();

  public changeUserName(){
    this.userService.changeUserName()
  }
}
