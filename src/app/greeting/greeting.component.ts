import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  template: `
    <p>
     hello from greeting component
    </p>
    @if (name){
        <h2>Hello my name is {{ name.firstName }}</h2>
    }
  `,
  styles: ``
})
export class GreetingComponent{
  @Input() name: any
}
