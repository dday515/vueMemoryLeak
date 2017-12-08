<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      user: {
        name: "Blair Googer",
        id: "bgooger",
        email: "bgooger@hiacode.com"
      }
    };
  },
  methods: {
    initialize() {
      var user = {};

      user.id = "bgooger";
      user.email = "bgooger@hiacode.com";
      user.name = "Developer";
      // assign a global so we can use it elsewhere
      window.user = user;
      this.user = user;
      this.loading = false;
    }
  },
  created: function() {
    this.initialize();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
