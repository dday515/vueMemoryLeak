<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/reviews/simple2/' }">Simple 3</el-breadcrumb-item>
    </el-breadcrumb>

    <el-date-picker v-model="dateModel" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel1" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel2" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel3" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel4" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel5" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel6" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel7" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel8" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel9" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel10" placeholder="Pick a Date"></el-date-picker>
    <el-date-picker v-model="dateModel11" placeholder="Pick a Date"></el-date-picker>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      dateModel: "",
      dateModel1: "",
      dateModel2: "",
      dateModel3: "",
      dateModel4: "",
      dateModel5: "",
      dateModel6: "",
      dateModel7: "",
      dateModel8: "",
      dateModel9: "",
      dateModel10: "",
      dateModel11: ""
    };
  },
  created: function() {
    window.document.title = "Health Information Associates";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
