import Redirect from "umi/redirect";


export default props => {
  if (Math.random() > 0.5) {
    console.log(props);

    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location.pathname } // 传递重定向地址
        }}
      />
    );
  }
  return (
    <div>
      <div>PrivateRoute (routes/PrivateRoute.js)</div>
      {props.children}
    </div>
  );
};
