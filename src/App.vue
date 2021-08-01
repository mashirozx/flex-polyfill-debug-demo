<template>
  <div class='flex-box'>
    <div class='yellow'></div>
    <div class='yellowgreen'></div>
    <div class='green'></div>
    <div class='yellow'></div>
    <div class='yellowgreen'></div>
    <div class='green'></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss" scoped>
.flex-box{
  width:170px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap:10px;
  >*{
    flex: 1 1 auto;
    width: 50px;
    height:50px;
  }
  >.yellow{
    background:yellow
  }
  >.yellowgreen{
    background:yellowgreen
  }
  >.green{
    background:green
  }
}
</style>
