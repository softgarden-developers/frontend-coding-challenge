import { createReducer, on } from '@ngrx/store';
import { Post, PostState } from '../models/post.model';
import * as PostActions from './post.actions';

export const postFeatureKey = 'posts';
export const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = createReducer(
  initialState,

  on(PostActions.loadPosts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(PostActions.loadPostsSuccess, (state, { posts }) => state)
);
