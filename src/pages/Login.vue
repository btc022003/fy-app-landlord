<template>
  <div class="wrap">
    <van-nav-bar title="登录" />
    <TipText title="请登录" sub-title="欢迎回来，好久不见" />
    <!-- 表单 -->
    <ul class="form">
      <li>
        <p>用户名</p>
        <input type="text" placeholder="请输入用户名" />
      </li>
      <li>
        <p>密码</p>
        <input type="text" placeholder="请输入密码" />
      </li>
    </ul>
    <router-link to="/" class="forget">忘记密码？</router-link>
    <van-button type="primary" size="large" class="submit" @click="submit"
      >登录</van-button
    >
    <p class="register">
      <span>还没账号?</span
      ><router-link to="/" class="to-register">快去注册</router-link>
    </p>
  </div>
</template>
<script setup lang="ts">
import TipText from "../components/TipText.vue";
import { useRouter } from "vue-router";
import { showToast } from "vant";
let router = useRouter();
let submit = async () => {
  localStorage.setItem("token", "xxx");
  showToast("登录成功");
  setTimeout(() => router.replace("/"), 1000);
};
</script>
<style scoped lang="scss">
.wrap {
  padding-top: 30px;
  box-sizing: border-box;
}
.form {
  padding: 0 24px;
  li {
    margin-bottom: 20px;
    p {
      font-size: 15px;
      margin: 10px 0;
    }
    input {
      width: 100%;
      height: 45px;
      border-radius: 23px;
      border: 1px solid #f9ab21;
      text-indent: 1em;
      line-height: 45px;
      font-size: 18px;
    }
  }
}
.forget,
.to-register {
  font-size: 15px;
  color: #3f51b5;
  margin: 24px;
}
.submit {
  margin: 24px;
  width: 327px;
  border-radius: 20px;
}
.register {
  text-align: center;
  margin-top: 60px;
  font-size: 15px;
  span {
    color: #9e9e9e;
  }
  .to-register {
    margin: 0 5px;
  }
}
</style>
