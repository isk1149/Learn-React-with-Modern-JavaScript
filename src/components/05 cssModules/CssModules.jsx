import styles from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>CSS Modules입니다</p>
      <button className={styles.button}>버튼</button>
    </div>
  );
};
