import { useContext, useRef, useState } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  let [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    setSuccessMessage(`This post has been creacted by ${userId}.`);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reaction, tags);
  };

  return (
    <div>
      {successMessage !== "" ? (
        <div className="alert alert-success create-post-success" role="alert">
          <p>{successMessage}</p>
        </div>
      ) : (
        <></>
      )}

      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            ref={reactionElement}
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsElement}
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
