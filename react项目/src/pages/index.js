import styles from "./index.css";
import Link from "umi/link";

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <ul>
        <li>
          <Link to={`/users`}>用户</Link>
        </li>
        <li>
          <Link to={`/goods`}>商品</Link>
        </li>
        <li>
          <Link to={`/about`}>关于</Link>
        </li>
      </ul>
    </div>
  );
}
