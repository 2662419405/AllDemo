let data = [
  { title: "web全栈" },
  { title: "java架构师" },
  { title: "百万年薪" }
];
export default {
  // "method url": Object 或 Array
  // "get /api/goods": {
  //   result: data
  // },
  // "method url": (req, res) => {}
  "get /api/goods": function(req, res, next) {
    setTimeout(() => {
      res.json({
        result: data
      });
    }, 2500);
  }
};
