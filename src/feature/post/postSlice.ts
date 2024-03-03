import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Answer, Post } from "../../types/post";
import { apiSlice } from "../../app/api/apiSlice";

interface PostState {
  loading: boolean;
  posts: Post[] | null;
  currentPost: Post | null;
  currentPostAnswers: Answer[] | null;
}

const initialState: PostState = {
  loading: true,
  posts: [],
  currentPost: null,
  currentPostAnswers: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get("http://localhost:5174/api/question");
  return response.data;
});

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (postId: string) => {
    const response = await axios.get(
      `http://localhost:5174/api/question/${postId}`
    );

    return response.data;
  }
);

export const getAnswersByPostId = createAsyncThunk(
  "posts/getPostAnswersByPostId",
  async (postId: string) => {
    const response = await axios.get(
      `http://localhost:5174/api/Answer?questionId=${postId}`
    );

    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action: any) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPostById.fulfilled, (state, action: any) => {
        state.currentPost = action.payload;
        state.loading = false;
      })
      .addCase(getAnswersByPostId.fulfilled, (state, action: any) => {
        state.currentPostAnswers = action.payload;
        state.loading = false;
      });
  },
});

export const selectPosts = (state: { post: PostState }) => state.post.posts;

export default postSlice.reducer;
