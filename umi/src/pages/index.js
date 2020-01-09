
import styles from './index.css';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Link to="/users/1231313">去动态路由users组件</Link>
      <br />
      <Link to="/food/id">去动态路由food组件</Link>
    </div>
  );
}
