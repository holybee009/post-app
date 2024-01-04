import classes from "./NewPost.module.css";

function NewPost({ close, postContent, posterName, formSubmit }) {
  return (
    <form className={classes.body} onSubmit={formSubmit}>
      <label>type post</label>
      <textarea rows="12" cols="40" required onChange={postContent}></textarea>
      <label>your name</label>
      <input placeholder="input name" required onChange={posterName} />
      <div className={classes.footer}>
        <button type="button" onClick={close}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
