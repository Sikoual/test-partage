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
  <app-greeting [user]="user"/>
  <button (click)="init()">Init/Reset</button>
  <button (click)="changeUserName()">Change name</button>
  `,
  styles: ``
})
export class AppComponent implements OnInit {
  public userService = inject(UserService);
  public user = {};

  public async ngOnInit() {
    this.user = await this.userService.getUser()
  }

  public async changeUserName(){
    this.user = await this.userService.changeUserName();
  }

  public async init(){
    this.user = await this.userService.init();
  }
}
