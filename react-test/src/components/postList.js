import React, { useState } from "react";
import Post from "./post";
import AddPost from "./addPost";
import './postList.css'
export default function PostList(props) {

  const getPostMap = () => {
    const posts = props.posts.map(post => {
      return <Post title={post.title} body={post.body} userId={post.userId} />
    });
    return posts;
  }

  return (<div>
    <div className="Div">List of posts done by user Id: {props.posts[0].userId}</div>
    <br />
    <div>{getPostMap()}</div>
    <AddPost userId={props.posts[0].userId}/>
  </div>
  );

}