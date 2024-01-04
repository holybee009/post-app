import classes from "./Header.module.css";

function Header({ boxPost }) {
  return (
    <div className={classes.header}>
      <h1>All posts</h1>
      <button className={classes.button} onClick={boxPost}>
        add post
      </button>
    </div>
  );
}

export default Header;
