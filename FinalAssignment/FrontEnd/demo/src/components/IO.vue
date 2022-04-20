<template>
  <div id="IO">
    <el-input
      type="textarea"
      :autosize="{ minRows: 7, maxRows: 12 }"
      placeholder="请输入传入参数"
      v-model="text"
      size="large"
    >
    </el-input>
    <div style="margin: 17px 0"></div>
    <el-button type="primary" plain>代码测试 RUN</el-button>
    <div style="margin: 17px 0"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 12, maxRows: 17 }"
      placeholder="请输入传入参数"
      v-model="text"
      size="large"
      disabled="true"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  name: "IO",
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style>
#IO {
  width: 50%;
  margin-top: 27px;
}
</style>
