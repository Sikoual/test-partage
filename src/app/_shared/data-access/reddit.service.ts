import { computed, Injectable, signal } from '@angular/core';
import { Gif } from '../interfaces/gif';
import { of, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface GifsState {
  gifs: Gif[];
}

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  // state
  private state = signal<GifsState>({
    gifs: [],
  });

  // selectors
  gifs = computed(() => this.state().gifs);

  // sources
  gifsLoaded$ = of([
    {
      src: '',
      author: '',
      name: '',
      permalink: '',
      title: 'test gif',
      thumbnail: '',
      comments: 0,
    },
  ]);

  constructor() {
    //reducers
    this.gifsLoaded$.pipe(
      takeUntilDestroyed(),
      tap((gifs) => {
        this.state.update((state) => (
          {
            ...state,
            gifs: [...state.gifs, ...gifs],
          })
        )
      })
    ).subscribe();
  }
}
