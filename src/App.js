import "./App.css";
import Posts from "./components/Posts";
import Header from "./components/Header";
import NewPost from "./components/NewPost";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showPostBox, setShowPostBox] = useState(false);
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [postList, setPostList] = useState([]);

  function addList(postData) {
    setPostList((existingPost) => [postData, ...existingPost]);
  }
  function postBox() {
    setShowPostBox(!showPostBox);
  }
  function handleCloseBox() {
    setShowPostBox(!showPostBox);
  }
  function getPostContent(event) {
    setContent(event.target.value);
  }
  function getPosterName(event) {
    setName(event.target.value);
  }
  function handleSubmission(event) {
    event.preventDefault();
    const postData = {
      body: content,
      author: name,
    };
    addList(postData);
    handleCloseBox();
  }
  return (
    <div className="App">
      <Header boxPost={postBox} />
      <div className="postBody">
        {postList.length > 0 &&
          postList.map((post) => (
            <Posts newName={post.body} newPost={post.author} />
          ))}
        {postList.length === 0 && (
          <div
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              margin: "0 35vw",
            }}
          >
            <h1>There are no post yet</h1>
            <p>start adding some</p>
          </div>
        )}
      </div>

      {showPostBox && (
        <Modal closeBox={handleCloseBox}>
          <NewPost
            postContent={getPostContent}
            posterName={getPosterName}
            close={handleCloseBox}
            formSubmit={handleSubmission}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
