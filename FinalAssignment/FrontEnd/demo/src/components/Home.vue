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
        :autosize="{ minRows: 11, maxRows: 11 }"
        :placeholder="example"
        v-model="text"
        size="large"
      >
      </el-input>
      <el-input
        type="textarea"
        :autosize="{ minRows: 11, maxRows: 11 }"
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
      this.text = "";
      this.result = "";
      let defaultExample = "请以JSON格式输入函数所需参数\nExample: ";
      let defaultExpected = "Expected Result: ";
      switch (this.value) {
        case "1":
          this.example = defaultExample + Code0.code1.example;
          this.expected = defaultExpected + Code0.code1.result;
          break;
        case "2":
          this.example = defaultExample + Code0.code2.example;
          this.expected = defaultExpected + Code0.code2.result;
          break;
        case "3":
          this.example = defaultExample + Code0.code3.example;
          this.expected = defaultExpected + Code0.code3.result;
          break;
        case "4":
          this.example = defaultExample + Code0.code4.example;
          this.expected = defaultExpected + Code0.code4.result;
          break;
        case "5":
          this.example = defaultExample + Code0.code5.example;
          this.expected = defaultExpected + Code0.code5.result;
          break;
        case "6":
          this.example = defaultExample + Code0.code6.example;
          this.expected = defaultExpected + Code0.code6.result;
          break;
        case "7":
          this.example = defaultExample + Code0.code7.example;
          this.expected = defaultExpected + Code0.code7.result;
          break;
        case "8":
          this.example = defaultExample + Code0.code8.example;
          this.expected = defaultExpected + Code0.code8.result;
          break;
        case "9":
          this.example = defaultExample + Code0.code9.example;
          this.expected = defaultExpected + Code0.code9.result;
          break;
        case "10":
          this.example = defaultExample + Code0.code10.example;
          this.expected = defaultExpected + Code0.code10.result;
          break;
        default:
          this.example = "请以JSON格式输入函数所需参数";
          this.expected = "云函数执行结果, 非必要请勿修改";
          break;
      }
    },
    input() {
      if (this.value != "") {
        if (this.text != "") {
          this.result = "Loading...";
          console.log(new Date());
          switch (this.value) {
            case "1":
              this.callCloudFunction("Average", "pyz");
              break;
            case "2":
              this.callCloudFunction("Maximum", "pyz");
              break;
            case "3":
              this.callCloudFunction("Minimum", "pyz");
              break;
            case "4":
              this.callCloudFunction("average", "zyq");
              break;
            case "5":
              this.callCloudFunction("count", "zyq");
              break;
            case "6":
              this.callCloudFunction("finitebit", "zyq");
              break;
            case "7":
              this.callCloudFunction("variance", "sj");
              break;
            case "8":
              this.callCloudFunction("sort", "sj");
              break;
            case "9":
              this.callCloudFunction("mode", "sj");
              break;
            case "10":
              this.callCloudFunction("medium", "sj");
              break;
            default:
              break;
          }
        } else {
          this.result = "Empty Input";
        }
      } else {
        this.result = "Please select a function first";
      }
    },
    callCloudFunction(url, id) {
      const _this = this;
      const axios = require("axios");

      const domain = ".api.cheeseburgerim.space/";

      const config = {
        method: "post",
        url: "https://" + id + domain + url,
        data: _this.text,
      };

      axios(config)
        .then(function (response) {
          let body = response.data;
          console.log(body);
          _this.result =
            new Date().toLocaleString() + "\nClould Function Result: \n" + body;
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
  font-size: 27px !important;
}
</style>
