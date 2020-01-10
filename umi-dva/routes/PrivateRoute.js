import Redirect from "umi/redirect";

export default props => {
  // 50%概率需要去登录页面
  if (Math.random() > 0.5) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div>PrivateRoute (routes/PrivateRoute.js)</div>
      {props.children}
    </div>
  );
};
