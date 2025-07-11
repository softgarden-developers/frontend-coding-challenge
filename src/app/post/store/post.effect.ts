import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { loadPosts, loadPostsSuccess } from './post.actions';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private store: Store) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      map(() => loadPostsSuccess({ posts: [] }))
    )
  );
}
