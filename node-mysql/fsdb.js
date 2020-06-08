const fs = require("fs");

function get(key) {
  fs.readFile("./db.json", (err, data) => {
    const json = JSON.parse(data);
    console.log(json[key]);
  });
}
function set(key, value) {
  fs.readFile("./db.json", (err, data) => {
    // 可能是空文件，则设置为空对象
    const json = data ? JSON.parse(data) : {};
    json[key] = value; // 设置值
    // 重新写入文件
    fs.writeFile("./db.json", JSON.stringify(json), err => {
      if (err) {
        console.log(err);
      }
      console.log("写入成功！");
    });
  });
}

// 命令行接口部分
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(input) {
  const [op, key, value] = input.split(" ");

  if (op === 'get') {
    get(key)
  } else if (op === 'set') {
    set(key, value)
  } else if(op === 'quit'){
    rl.close();
  }else {
    console.log('没有该操作');
  }
});

rl.on("close", function() {
  console.log("程序结束");
  process.exit(0);
});