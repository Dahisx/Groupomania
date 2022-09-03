import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "store",
  initialState: {
    listPosts:[]
  },
  reducers: {
    initListPosts:(state,action) => {
        state.listPosts = action.payload;
    },
    addPostToList: (state, action) => {
      state.listPosts = [action.payload,...state.listPosts];
    },
    deletePostToList: (state, action) => {
      state.listPosts = state.listPosts.filter(post => post._id !== action.payload);
    },
    modifyPostToList: (state, action) => {
      state.listPosts = state.listPosts.map(post => {
        if (post._id === action.payload.id) {
          return {
            ...post,
            message: action.payload.message,
            imageUrl: action.payload.imageUrl,
          }
        }
        return post;
      } );
    },
    addLikeToPost: (state, action) => {
      state.listPosts = state.listPosts.map(post => {
        if (post._id === action.payload.id) {
          post.usersLiked.push(action.payload.userId);
        }
        return post;
      });
    },
    addDislikeToPost: (state, action) => {
      state.listPosts = state.listPosts.map(post => {
        if (post._id === action.payload.id) {
          const indexUser = post.usersLiked.findIndex(userId => userId === action.payload.userId);
          post.usersLiked.splice(indexUser, 1);
        }
        return post;
      });
      
    }
  },
});




// Action creators are generated for each case reducer function
export const { addPostToList,initListPosts,addLikeToPost,
  addDislikeToPost, deletePostToList, modifyPostToList } = postSlice.actions;

export default postSlice.reducer;
