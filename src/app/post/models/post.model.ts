export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}
