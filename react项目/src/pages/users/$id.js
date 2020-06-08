
import styles from './$id.css';

export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>user id: {props.match.params.id}</h1>
    </div>
  );
}
