<template>
  <div id="IO">
    <el-input
      type="textarea"
      :autosize="{ minRows: 7, maxRows: 12 }"
      placeholder="请以JSON格式输入函数所需参数"
      v-model="text"
      size="large"
    >
    </el-input>
    <div style="margin: 17px 0"></div>
    <el-button type="primary" plain @click="input()">代码测试 RUN</el-button>
    <div style="margin: 17px 0"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 12, maxRows: 17 }"
      placeholder="云函数执行结果, 非必要请勿修改"
      v-model="result"
      size="large"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  name: "IO",
  methods: {
    input() {
      /*
{
    "message":"12345"
}
      */
      if (this.text != "") {
        this.result = "Loading...";
        console.log("input");
        // console.log(this.text);
        // console.log(JSON.parse(this.text));
        // console.log(btoa(this.text));
        // console.log(atob(btoa(this.text)));
        // this.Test(JSON.stringify(this.text));
        this.Test(this.text);
      } else {
        this.result = "Empty Input";
        console.log("empty");
      }
    },
    Test(data) {
      var axios = require("axios");
      // var data = JSON.stringify({
      //   message: "12345",
      // });
      const _this = this;

      var config = {
        method: "post",
        url: "https://api.cheeseburgerim.space/Test",
        headers: {
          "x-auth-token": this.GLOBAL.token,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          let body = response.data.body;
          // console.log(body);
          let str = window.atob(body);
          // console.log(str);
          _this.result = "Cloud Function Result: \n" + str;
          let obj = JSON.parse(str);
          console.log(obj);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  data() {
    return {
      text: "",
      result: "",
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
