export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true
      }
    ]
  ],
  routes: [
    { path: "/", component: "./index" },
    { path: "/login", component: "./login" },
    { path: "/goods", component: "./goods/index" },
    {
      path: "/about",
      component: "./about",
      Routes: ["./routes/PrivateRoute.js"]
    },
    {
      path: "/users",
      component: "./users/_layout",
      routes: [
        { path: "/users/", component: "./users/index" },
        { path: "/users/:id", component: "./users/$id" }
      ]
    },
    {
      component: "./404"
    }
  ]
};
