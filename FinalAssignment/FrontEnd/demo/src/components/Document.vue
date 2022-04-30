<template>
  <div id="Document">
    <img src="../assets/report/1.jpg" />
    <h3>智能与计算学部</h3>
    <h3>2019级软件工程专业</h3>
    <h3>2022/4/29</h3>
    <div id="btn-container">
      <el-button type="primary" round>
        <a
          href="https://gitee.com/CheeseburgerIM/VirtualAndCloud/blob/main/FinalAssignment/Doc/%E5%A4%A7%E4%BD%9C%E4%B8%9A%E9%A2%98%E7%9B%AE.pdf"
          target="_blank"
          >作业题目</a
        ></el-button
      >
      <el-button type="success" round>
        <a
          href="https://gitee.com/CheeseburgerIM/VirtualAndCloud/blob/main/FinalAssignment/Doc/%E5%A4%A7%E4%BD%9C%E4%B8%9A%E8%AF%84%E5%88%86%E7%BB%86%E5%88%99.pdf"
          target="_blank"
          >评分细则</a
        ></el-button
      >
      <el-button type="warning" round>
        <a href="https://baidu.com" target="_blank">项目报告</a></el-button
      >
      <el-button type="danger" round>
        <a
          href="https://gitee.com/CheeseburgerIM/VirtualAndCloud/tree/main/FinalAssignment"
          target="_blank"
          >代码仓库</a
        ></el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Document",
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
</style>
