<template>
  <div id="Home">
    <el-select
      v-model="value"
      placeholder="请选择云函数"
      filterable
      @change="selectionChange()"
      default-first-option="true"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div id="function">
      <div id="CodeTest">
        <editor
          class="hoverEffect"
          v-model="content"
          @init="editorInit"
          lang="python"
          theme="chrome"
          width="95%"
          height="100%"
        ></editor>
      </div>
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
    </div>
  </div>
</template>

<script>
import Code0 from "./Code/Code0.vue";
import Code1 from "./Code/Code1.vue";

export default {
  name: "Home",
  components: {
    editor: require("vue2-ace-editor"),
  },
  methods: {
    selectionChange() {
      // console.log(this.value);
      switch (this.value) {
        case "Option1":
          this.content = Code1.code;
          break;
        default:
          this.content = Code0.code;
          break;
      }
    },
    editorInit: function () {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/python");
      require("brace/theme/chrome");
      require("brace/snippets/javascript"); //snippet
    },
    input() {
      /*
{
    "message":"12345"
}
      */
      if (this.text != "") {
        this.result = "Loading...";
        console.log(new Date());
        // console.log(this.text);
        // console.log(JSON.parse(this.text));
        // console.log(btoa(this.text));
        // console.log(atob(btoa(this.text)));
        // this.Test(JSON.stringify(this.text));
        this.Test(JSON.parse(this.text));
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
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log("response");
          // console.log(response);
          let data = response.data;
          // console.log("data");
          console.log(data);
          _this.result =
            new Date() + "\nCloud Function Result: \n" + JSON.stringify(data, null, "\t");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      text: "",
      result: "",
      content: Code0.code,
    };
  },
};
</script>

<style>
#function {
  display: flex;
  margin: auto 17px;
}
#CodeTest {
  margin-top: 27px;
  width: 50%;
}
#IO {
  width: 50%;
  margin-top: 27px;
}
</style>
