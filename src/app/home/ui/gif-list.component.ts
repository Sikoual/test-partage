import { Component, Input } from '@angular/core';
import { Gif } from '../../_shared/interfaces/gif';
import { GifPlayerComponent } from './gif-player.component';

@Component({
  selector: 'app-gif-list',
  standalone: true,
  imports: [
    GifPlayerComponent,
  ],
  template: `
    @for (gif of gifs; track gif.permalink){
      <div>
        <app-gif-player
          [src]="gif.src"
          [thumbnail]="gif.thumbnail"
        />
      </div>
    }
  `,
  styles: ``
})
export class GifListComponent {
  @Input({ required: true }) gifs!: Gif[];
}
