// When using this component, make sure to set a unique html element ID because the watch method depends on ID

<template>
  <textarea v-bind:value="value"></textarea>
</template>

<script>
  import tinymce from 'tinymce'

  // A tinymce theme is also required
  import 'tinymce/themes/modern/theme'

  // plugins
  // import 'tinymce/plugins/preview/plugin'
  // import 'tinymce/plugins/paste/plugin'
  // import 'tinymce/plugins/lists/plugin'

  export default {
    name: 'Tinymce',
    props: ['value', 'disabled'],
    methods: {
      updateValue: function (value) {
        this.$emit('input', value.trim())
        this.$emit('change')
      },
      handleDisabledProp: function (disabled) {
        if (disabled) {
          tinymce.get(this.$el.id).setMode('readonly')
          tinymce.activeEditor.getBody().setAttribute('contenteditable', false)
        } else {
          tinymce.get(this.$el.id).setMode('design')
        }
      }
    },
    mounted: function () {
      var component = this
      tinymce.init({
        skin_url: '/static/css/tinymceskins/lightgray',
        menubar: false,
        target: this.$el,
        height: '300',
        // plugins: 'preview paste lists',
        // forced_root_block: 'p',  // changed from blank to p - SysAid 12847 and 12828 - weird bolding issues
        forced_root_block: '', // forces single line after enter key
        browser_spellcheck: true,
        paste_as_text: true,
        convert_fonts_to_spans: false,
        // formats: {
        //  bold: { inline: 'b' },
        //  italic: { inline: 'i' }
        // },
        // paste_strip_class_attributes: 'size face font', // removing for compatibility with SSRS reporting - removed once added paste_as_text to true
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | preview',
        setup: (editor) => {
          editor.on('blur', (e) => {
            if (!e.target.isNotDirty && this.value !== editor.getContent()) {
              component.updateValue(editor.getContent())
            }
          })
        }
      })

      this.handleDisabledProp(this.disabled)
    },
    watch: {
      value() {
        tinymce.get(this.$el.id).setContent(this.value)
      },
      disabled() {
        this.handleDisabledProp(this.disabled)
      }
    },
    beforeDestroy: function () {
      // if value exists update when navigating away using browser back button
      if (tinymce.get(this.$el.id) !== null) {
        if (!tinymce.get(this.$el.id).isNotDirty && this.value !== tinymce.get(this.$el.id).getContent()) {
          this.updateValue(tinymce.get(this.$el.id).getContent())
        }
    }
    // tinymce.remove()
      tinymce.editors = []
            tinymce.get(this.$el.id).destroy()
            tinymce.execCommand('mceRemoveEditor', true, this.$el.id)

            console.log('beforeDestroy tinymce')
    },
    deactivated: function () {
      // doing this solves the TinyMCE not loading properly during navigation
      // this is due to keep alive; exluding does not work the behavior varies
      // works for now until better logic.
      this.$destroy()
    }
  }

</script>