import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className={styles["sk-chase"]}>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
      </div>
    </div>
  );
}
export default Loader;
