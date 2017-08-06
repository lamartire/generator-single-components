<template lang='pug'>
  .<%= blockName %>
</template>

<script>
  export default {
    name: '<%= blockName %>',
    data () {
      return {}
    }
  }
</script>

<style lang='<%= style %>'>
  .<%= blockName %> {
    display: block
  }
</style>
