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

        default:
          this.content = Code0.code;
          break;
      }
    },
  },
  data() {
    return {
      options: {
        fontSize: 18, // 设置字号
        showPrintMargin: false, //去除编辑器里的竖线
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
