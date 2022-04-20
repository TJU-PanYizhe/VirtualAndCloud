<template>
  <div id="CodeTest">
    <editor
      v-model="content"
      @init="editorInit"
      lang="html"
      theme="chrome"
      width="90%"
      height="100%"
    ></editor>
  </div>
</template>

<script>
export default {
  name: "CodeTest",
  components: {
    editor: require("vue2-ace-editor"),
  },
  methods: {
    editorInit: function () {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/html");
      require("brace/mode/javascript"); //language
      require("brace/mode/less");
      require("brace/theme/chrome");
      require("brace/snippets/javascript"); //snippet
    },
  },
  data() {
    return {
      content: "print('Hello World!')",
    };
  },
};
</script>

<style>
#CodeTest {
  margin-top: 27px;
  height: 70vh;
  width: 50%;
}
</style>
