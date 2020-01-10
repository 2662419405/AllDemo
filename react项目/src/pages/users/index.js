import styles from "./index.css";
import Link from "umi/link";
import router from "umi/router";

export default function() {
  const users = [{ id: 1, name: "tom" }, { id: 2, name: "jerry" }];
  return (
    <div className={styles.normal}>
      <h1>用户列表</h1>
      <ul>
        {users.map(u => (
          // <li key={u.id}>
          //   <Link to={`/users/${u.id}`}>{u.name}</Link>
          // </li>
          <li key={u.id} onClick={()=>router.push(`/users/${u.id}`)}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
