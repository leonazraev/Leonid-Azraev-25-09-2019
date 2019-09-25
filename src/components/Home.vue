<template>
  <b-container>
      <br>
    <b-form-input list="input-list" id="search" placeholder=" Search"></b-form-input>
    <b-form-datalist  id="input-list" :options="options"></b-form-datalist>
  </b-container>
</template>
<script>
export default {
    data(){
        return {
            options: ['leon' , 'katty' , 'nati' , 'shai' , 'gili' , 'sami']
        }
    }
}
</script>
<style scoped>

</style>