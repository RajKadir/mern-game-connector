import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    // dispatch and send the res.data to the state
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);

    // Otherwise send a profile error
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);

    // dispatch and send the res.data to the state
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);

    // Otherwise send a profile error
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add a like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addPost = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`/api/posts/`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    history.push("/forums");

    dispatch(setAlert("Post created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// unlike
export const unLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      `/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert("Comment added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert("Comment removed", "danger"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
