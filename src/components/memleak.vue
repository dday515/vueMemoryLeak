<template>
  <div>

    <label>1) Use Google Chrome Task Manager (Shift-Esc) to view memory usage</label>
    <br>
    <label>2) Toggle the TinyMCE component on/off 5+ time</label>
    <br>
    <label>3) Memory is not released</label>
    <br>

    <el-row>
      <el-col :span="24">

        <label>Toggle TinyMCE</label>
        <input type="checkbox" v-model="showTinyMCE">
        <div v-if="showTinyMCE">
          <TinyMCE id="tinyMCEsimple" v-model="txtval"></TinyMCE>
          <TinyMCE id="tinyMCEsimple2" v-model="txtval2"></TinyMCE>
          <TinyMCE id="tinyMCEsimple3" v-model="txtval3"></TinyMCE>
          <TinyMCE id="tinyMCEsimple4" v-model="txtval4"></TinyMCE>
          <TinyMCE id="tinyMCEsimple5" v-model="txtval5"></TinyMCE>
          <TinyMCE id="tinyMCEsimple6" v-model="txtval6"></TinyMCE>
          <TinyMCE id="tinyMCEsimple7" v-model="txtval7"></TinyMCE>
          <TinyMCE id="tinyMCEsimple8" v-model="txtval8"></TinyMCE>
          <TinyMCE id="tinyMCEsimple9" v-model="txtval9"></TinyMCE>
          <TinyMCE id="tinyMCEsimple10" v-model="txtval10"></TinyMCE>
          <TinyMCE id="tinyMCEsimple11" v-model="txtval11"></TinyMCE>
          <TinyMCE id="tinyMCEsimple12" v-model="txtval12"></TinyMCE>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  // import quillEditor from "vue-quill-editor";
  // import "quill/dist/quill.core.css";
  //import hiaquillEditor from '@/components/controls/hiaQuill'
  import TinyMCE from '@/components/controls/TinyMCE'

  export default {
    name: "home",
    data() {
      return {
        wrapped: false,
        unwrapped: false,
        showTinyMCE: false,
        msg: "Welcome to Your Vue.js App",
        txtval: "here is some sample text",
        txtval2: "here is some sample text2",
        txtval3: "here is some sample text3",
        txtval4: "here is some sample text4",
        txtval5: "here is some sample text5",
        txtval6: "here is some sample text6",
        txtval7: "here is some sample text7",
        txtval8: "here is some sample text8",
        txtval9: "here is some sample text9",
        txtval10: "here is some sample text10",
        txtval11: "here is some sample text11",
        txtval12: "here is some sample text12",
        // choice1: '',
        // editorOption: {
        //   modules: {
        //     toolbar: [
        //       ["bold", "italic", "underline", "strike"],
        //       ["blockquote", "code-block"],
        //       [{ header: 1 }, { header: 2 }],
        //       [{ list: "ordered" }, { list: "bullet" }],
        //       [{ script: "sub" }, { script: "super" }],
        //       [{ indent: "-1" }, { indent: "+1" }],
        //       [{ direction: "rtl" }],
        //       [{ size: ["small", false, "large", "huge"] }],
        //       [{ header: [1, 2, 3, 4, 5, 6, false] }],
        //       [{ font: [] }],
        //       [{ color: [] }, { background: [] }],
        //       [{ align: [] }],
        //       ["clean"],
        //       ["link", "image", "video"]
        //     ],
        //     syntax: {
        //       highlight: text => hljs.highlightAuto(text).value
        //     }
        //   }
        // }
      };
    },
    created: function () {

    },

    components: {
      TinyMCE //,
      // Choices,
      // SpellCheck,
      // quillEditor
      // hiaquillEditor
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>