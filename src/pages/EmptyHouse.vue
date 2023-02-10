<template>
  <div class="wrap">
    <van-nav-bar
      title="空房快查"
      style="color: #333"
      left-arrow
      @click-left="$router.back()"
    />
    <img class="empty" src="../assets/empty.png" alt="" />
  </div>
</template>
<style scoped>
.wrap {
  padding-top: 30px;
}
.empty {
  display: block;
  margin: 80px auto;
}
</style>
