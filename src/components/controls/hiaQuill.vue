<template>
  <quill-editor :options="editorOption" :disabled="disabled" ref="compQuill" v-model="localValue" @blur="updateValue()"></quill-editor>
</template>

<script>


  export default {
    name: 'hiaQuill',
    props: ['value', 'disabled'],
    data() {
      return {
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'align': [] }],
              ['clean']
            ],
            history: {
              delay: 100,
              maxStacK: 200,
              userOnly: true
            }
          }
        },
        localValue: ''
      }
    },
    mounted: function () {
      this.localValue = this.value
    },
    methods: {
      updateValue: function () {
        this.$emit('input', this.localValue.trim())
      },
    },
    watch: {
      value() {
        this.localValue = this.value
      }
    },
    beforeDestroy() {
      // this.$el = null
      // delete this.$el
      // this.$destroy()
    }
  }
</script>

<style>
</style>
