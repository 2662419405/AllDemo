import styles from "./index.css";
import Link from "umi/link";
import router from "umi/router";

export default function() {
  // 模拟数据
  const users = [{ id: 1, name: "tom" }, { id: 2, name: "jerry" }];
  return (
    <div className={styles.normal}>
      <h1>Page users</h1>
      <ul>
        {users.map(u => (
          // 声明式
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
          // 命令式
          // <li key={u.id} onClick={() => router.push(`/users/${u.id}`)}>
          //   {u.name}
          // </li>
        ))}
      </ul>
    </div>
  );
}
