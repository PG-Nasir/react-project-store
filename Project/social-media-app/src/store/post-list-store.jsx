import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to dhaka",
    body: "Hi Friend, I am going to dhaka for vacation. Hope to enjoy a lot. Alhumdulliah",
    reaction: 9,
    userId: "USER-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: 2,
    title: "Going to chittagong",
    body: "Hi Friend, I am going to chittagong for vacation. Hope to enjoy a lot. Alhumdulliah",
    reaction: 19,
    userId: "USER-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: 3,
    title: "Going to Mymensing",
    body: "Hi Friend, I am going to Mymensing for vacation. Hope to enjoy a lot. Alhumdulliah",
    reaction: 2,
    userId: "USER-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
];

export default PostListProvider;
