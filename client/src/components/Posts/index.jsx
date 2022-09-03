import React from "react";


import Post from "./Post";
import PostsContainer from "./index.styled";
import { getPosts } from "../../request/posts";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initListPosts } from "../../store/postSlice";

const Posts = () => {

  const listPosts = useSelector(state => state.posts.listPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPost();
  },[])

  const fetchPost = async () => {
    const res = await getPosts();
    dispatch(initListPosts(res.data));
  }

  return (
    <PostsContainer>
      {listPosts.map((post) => <Post key={post._id} post={post} />)}
    </PostsContainer>
  );
};

export default Posts;
