<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/reviews/unwrapped/' }">unwrapped</el-breadcrumb-item>
    </el-breadcrumb>

    <quill-editor ref="simple" v-model="txtval"></quill-editor>
    <quill-editor ref="simple2" v-model="txtval2"></quill-editor>
    <quill-editor ref="simple3" v-model="txtval3"></quill-editor>
    <quill-editor ref="simple4" v-model="txtval4"></quill-editor>
    <quill-editor ref="simple5" v-model="txtval5"></quill-editor>
    <quill-editor ref="simple6" v-model="txtval6"></quill-editor>
    <quill-editor ref="simple7" v-model="txtva7"></quill-editor>
    <quill-editor ref="simple8" v-model="txtval8"></quill-editor>
    <quill-editor ref="simple9" v-model="txtval9"></quill-editor>
    <quill-editor ref="simple10" v-model="txtval0"></quill-editor>
    <quill-editor ref="simple11" v-model="txtval1"></quill-editor>
    <quill-editor ref="simple12" v-model="txtval2"></quill-editor>
  </div>
</template>

<script>
// import quillEditor from "vue-quill-editor";
// import "quill/dist/quill.core.css";
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      txtval: "here is some sample text",
      txtval2: "here is some sample text2",
      txtval3: "here is some sample text3",
      txtva4: "here is some sample text4",
      txtval5: "here is some sample text5",
      txtval6: "here is some sample text6",
      txtval7: "here is some sample text7",
      txtval8: "here is some sample text8",
      txtval9: "here is some sample text9",
      txtval10: "here is some sample text10",
      txtval11: "here is some sample text11",
      txtval12: "here is some sample text12",
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"]
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      }
    };
  },
  created: function() {
    window.document.title = "Health Information Associates";
  },

  components: {
    // Tinymce,
    // Choices,
    // SpellCheck,
    // quillEditor
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
