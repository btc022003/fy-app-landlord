<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ subTitle }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string; subTitle: string }>();
</script>
<style scoped lang="scss">
div {
  padding: 24px;
  h2 {
    font-size: 28px;
  }
  p {
    font-size: 17px;
    color: #9e9e9e;
    line-height: 30px;
  }
}
</style>
