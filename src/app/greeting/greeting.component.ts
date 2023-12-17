import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  template: `
    @if (user){
        <h2>Hello my name is {{ user.firstName }}</h2>
    }
  `,
  styles: ``
})
export class GreetingComponent{
  @Input() user: any
}
