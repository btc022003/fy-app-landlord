<template>
  <div class="wrap">
    <div>
      <h3>{{ title }}</h3>
      <p>{{ subTitle }}</p>
    </div>
    <img @click="$emit('getMore')" src="../assets/more.png" alt="" />
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string; subTitle: string }>();
defineEmits<{ click: Function }>();
</script>
<style scoped lang="scss">
.wrap {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 15px 0;
  div {
    display: flex;
    align-items: flex-end;
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 10px;
      color: #979797;
      margin-left: 5px;
    }
  }
}
</style>
