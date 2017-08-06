<template>
  <div class='<%= blockName %>'></div>
</template>

<script>
  export default {
    name: '<%= blockName %>',
    data () {
      return {}
    }
  }
</script>

<style lang='<%= style === 'styl' ? 'stylus' : style %>'>
<% if (style === 'css' || style === 'scss' || style === 'less') { -%>
  .<%= blockName %> {
    display: block
  }
<% } -%>
<% if (style === 'sass') { -%>
  .<%= blockName %>
    display: block
<% } -%>
<% if (style === 'sss' || style === 'styl') { -%>
  .<%= blockName %>
    display block
<% } -%>
</style>
