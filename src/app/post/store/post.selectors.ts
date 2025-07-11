import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Post, PostState } from '../models/post.model';
import { postFeatureKey } from './post.reducers';

// Feature selector
export const selectPostState = createFeatureSelector<PostState>(postFeatureKey);

export const selectPostsLoading = createSelector(
  selectPostState,
  (state) => state.loading
);
