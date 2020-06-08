const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  url: String,
  poster: String,
  icon: String,
  description: String,
  cooperation: [String]
});

const model = mongoose.model("vip", schema);

// 测试数据
async function testdata() {
  await model.deleteMany();
  await model.insertMany([
    {
      name: "Web全栈架构师",
      url: "/vip-course/web",
      poster: "https://img.kaikeba.com/web_vip.png",
      icon: "https://img.kaikeba.com/web_menu.png",
      description: "授课深度对标百度T6-T7，进入BAT等一线大厂，实现年薪30万+",
      cooperation: [
        "https://img.kaikeba.com/baidu.png",
        "https://img.kaikeba.com/toutiao.png"
      ]
    },
    {
      name: "Python爬虫商业项目班",
      url: "/vip-course/python",
      poster: "https://img.kaikeba.com/python_vip_new.png",
      icon: "https://img.kaikeba.com/python_menu.png",
      description: "廖雪峰亲自传授如何用python，让天下没有爬不到的数据",
      cooperation: [
        "https://img.kaikeba.com/baidu.png",
        "https://img.kaikeba.com/toutiao.png"
      ]
    },
    {
      name: "百万年薪架构师",
      url: "/vipcourse/javaMillion",
      poster: "https://img.kaikeba.com/javaMillion_vip.png",
      icon: "https://img.kaikeba.com/javaMillion_menu.png",
      description: "人工智能时代，互联网高可用高并发的架构核心技术深度揭秘",
      cooperation: [
        "https://img.kaikeba.com/baidu.png",
        "https://img.kaikeba.com/toutiao.png"
      ]
    },
    {
      name: "人工智能特训营",
      url: "/vip-course/ai",
      poster: "https://img.kaikeba.com/robot_vip_new.png",
      icon: "https://img.kaikeba.com/robot_menu.png",
      description: "课程研发结合BAT企业用人需求，基于14个商业项目案例深度教学",
      cooperation: [
        "https://img.kaikeba.com/baidu.png",
        "https://img.kaikeba.com/toutiao.png"
      ]
    },
    {
      name: "UXD全栈设计师",
      url: "/vip-course/uxd",
      poster: "https://img.kaikeba.com/uxd_vip.png",
      icon: "https://img.kaikeba.com/uxd_menu.png",
      description: "深度系统地学习，华丽变身UXD全栈设计师，开创“薪”时代",
      cooperation: [
        "https://img.kaikeba.com/baidu.png",
        "https://img.kaikeba.com/toutiao.png"
      ]
    },
    {
      name: "JavaEE 企业级分布式高级架构师",
      url: "/vipcourse/java",
      poster: "https://img.kaikeba.com/java_vip.png",
      icon: "https://img.kaikeba.com/java_menu.png",
      description:
        "教研团队与一线企业技术leader深度合作，以企业所需，重新定义Java进阶课程",
      cooperation: [
        "https://img.kaikeba.com/baidu.png",
        "https://img.kaikeba.com/toutiao.png"
      ]
    }
  ]);
}

testdata();

module.exports = model;