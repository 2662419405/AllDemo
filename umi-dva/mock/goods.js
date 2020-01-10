const data = [{ title: "web全栈" }, { title: "java架构师" }];

export default {
  // "method url": Object 或 Array
  //   "get /api/goods": { result: data },

  // "method url": (req, res) => {}
  "get /api/goods": function(req, res) {
    setTimeout(() => {
      res.json({ result: data });
    }, 1250);
  }
};
