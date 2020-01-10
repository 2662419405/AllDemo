import {Button} from 'antd'
import styles from './login.css';
import router from 'umi/router';

export default function(props) {
  let from = props.location.state.from || "/"; // 重定向地址

  return (
    <div className={styles.normal}>
      <h1>Page login</h1>
      <Button onClick={()=>router.push(from)}>登录</Button>
    </div>
  );
}
