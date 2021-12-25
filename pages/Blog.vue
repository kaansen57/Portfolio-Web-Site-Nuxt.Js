<template>
  <div class="container">
    <Header></Header>
  
  </div>
</template>

<script>
    export default {
        data(){
          return{
            title:"My Blog Posts"
          }
        },
        head(){
          return{
            title: this.title
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>