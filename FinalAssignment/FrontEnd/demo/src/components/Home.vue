<template>
  <div id="Home">
    <el-select
      v-model="value"
      placeholder="请选择云函数"
      filterable
      @change="selectionChange()"
      :default-first-option="true"
      style="margin-right: 17px"
    >
      <el-option
        v-for="item in options"
        :key="item.key"
        :label="item.value"
        :value="item.key"
      >
      </el-option>
    </el-select>
    <el-button type="primary" plain @click="input()" style="margin-left: 17px"
      >代码测试 RUN</el-button
    >
    <div id="IO">
      <el-input
        type="textarea"
        :autosize="{ minRows: 21, maxRows: 21 }"
        :placeholder="example"
        v-model="text"
        size="large"
      >
      </el-input>
      <el-input
        type="textarea"
        :autosize="{ minRows: 21, maxRows: 21 }"
        :placeholder="expected"
        v-model="result"
        size="large"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
import Code0 from "./Code/Code0.vue";
import Function0 from "./Function/Function0.vue";

export default {
  name: "Home",
  components: {},
  methods: {
    selectionChange() {
      switch (this.value) {
        case "1":
          this.example = "请以JSON格式输入函数所需参数\nExample: " + Code0.code1.example;
          this.expected = "Expected Result: " + Code0.code1.result;
          break;
        default:
          this.example = "请以JSON格式输入函数所需参数";
          this.expected = "云函数执行结果, 非必要请勿修改";
          break;
      }
    },
    input() {
      if (this.text != "") {
        this.result = "Loading...";
        console.log(new Date());
        switch (this.value) {
          case "1":
            this.callCloudFunction(this.text, "Test");
            break;
          default:
            break;
        }
      } else {
        this.result = "Empty Input";
        console.log("empty");
      }
    },
    callCloudFunction(data, url) {
      const _this = this;
      const axios = require("axios");

      const config = {
        method: "post",
        url: "https://api.cheeseburgerim.space/" + url,
        data: data,
      };

      axios(config)
        .then(function (response) {
          let body = response.data;
          console.log(body);
          _this.result = body;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  data() {
    return {
      options: Function0.FunctionList,
      value: "",
      text: "",
      result: "",
      example: "请以JSON格式输入函数所需参数",
      expected: "云函数执行结果, 非必要请勿修改",
    };
  },
};
</script>

<style>
#IO {
  display: flex;
  justify-content: center;
  margin: 27px 17px;
}
.el-input--large {
  margin: 17px;
}
</style>
