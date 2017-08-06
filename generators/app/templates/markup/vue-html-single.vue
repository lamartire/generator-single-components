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

<style lang='<%= style %>'>
  .<%= blockName %> {
    display: block
  }
</style>
