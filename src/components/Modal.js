import classes from "./modal.module.css";

function Modal({ children, closeBox }) {
  return (
    <>
      <div className={classes.backdrop} onClick={closeBox} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
