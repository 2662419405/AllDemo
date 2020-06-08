
import styles from './_layout.css';

export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page _layout</h1>
      <div>{props.children}</div>
    </div>
  );
}
