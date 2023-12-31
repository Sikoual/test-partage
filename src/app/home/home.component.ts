import { Component, inject } from '@angular/core';
import { GifListComponent } from './ui/gif-list.component';
import { RedditService } from '../_shared/data-access/reddit.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GifListComponent,
    InfiniteScrollModule
  ],
  template: `
  <h1>Hello world</h1>
  <app-gif-list
    [gifs]="this.redditService.gifs()"
    class="grid-container"
    infiniteScroll
    (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
  />
  `,
  styles: ``
})
export default class HomeComponent {
  public redditService: RedditService = inject(RedditService)
}
