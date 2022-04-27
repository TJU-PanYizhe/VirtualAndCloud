<template>
  <div id="Code">
    <el-menu mode="vertical" class="hoverEffect">
      <el-menu-item v-for="i in itemList" :key="i.key" @click="itemChange(i.key)">{{
        i.value
      }}</el-menu-item>
    </el-menu>
    <editor
      class="hoverEffect"
      v-model="content"
      @init="editorInit"
      lang="python"
      theme="chrome"
      width="87%"
      height="77vh"
      style="margin-right: 17px"
      :options="options"
    ></editor>
  </div>
</template>

<script>
import Code0 from "./Code/Code0.vue";
import Function0 from "./Function/Function0.vue";

export default {
  name: "Code",
  components: {
    editor: require("vue2-ace-editor"),
  },
  methods: {
    editorInit: function () {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/python");
      require("brace/theme/chrome");
      require("brace/snippets/javascript"); //snippet
    },
    itemChange(key) {
      // console.log(key);
      this.item = key;
      switch (this.item) {
        case "1":
          this.content = Code0.code1.code;
          break;
        case "2":
          this.content = Code0.code2.code;
          break;
        case "3":
          this.content = Code0.code3.code;
          break;
        case "4":
          this.content = Code0.code4.code;
          break;
        case "5":
          this.content = Code0.code5.code;
          break;
        case "6":
          this.content = Code0.code6.code;
          break;
        case "7":
          this.content = Code0.code7.code;
          break;
        case "8":
          this.content = Code0.code8.code;
          break;
        case "9":
          this.content = Code0.code9.code;
          break;
        case "10":
          this.content = Code0.code10.code;
          break;
        case "11":
          this.content = Code0.code11.code;
          break;
        case "12":
          this.content = Code0.code12.code;
          break;
        case "13":
          this.content = Code0.code13.code;
          break;
        case "14":
          this.content = Code0.code14.code;
          break;
        case "15":
          this.content = Code0.code15.code;
          break;
        case "16":
          this.content = Code0.code16.code;
          break;
        case "17":
          this.content = Code0.code17.code;
          break;
        default:
          this.content = Code0.code;
          break;
      }
    },
  },
  data() {
    return {
      options: {
        enableBasicAutocompletion: true, // 启用基本自动完成
        enableSnippets: true, // 启用代码段
        enableLiveAutocompletion: true, // 启用实时自动完成
        printMarginColumn: 30,
        displayIndentGuides: false, // 显示参考线
        enableEmmet: true, // 启用Emmet
        tabSize: 6, // 标签大小
        fontSize: 18, // 设置字号
        useWorker: true, // 使用辅助对象
        showPrintMargin: false, //去除编辑器里的竖线
        enableMultiselect: true, //     选中多处
        readOnly: false, // 是否只读
        showFoldWidgets: true, // 显示折叠部件
        fadeFoldWidgets: true, // 淡入折叠部件
        wrap: true, //换行
      },
      itemList: Function0.FunctionList,
      content: Code0.code,
      item: "",
    };
  },
};
</script>

<style>
#Code {
  display: flex;
  justify-content: center;
}
.el-menu {
  margin: auto 17px !important;
  border: solid 1px #e6e6e6;
  border-radius: 7px;
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 77vh;
}
</style>
