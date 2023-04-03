<template>
  <div class="wrap">
    <van-nav-bar title="注册" />
    <TipText title="请注册" sub-title="欢迎回来，好久不见" />
    <!-- 表单 -->
    <ul class="form">
      <li>
        <p>手机号</p>
        <input type="text" placeholder="请输入手机号" v-model="mobile" />
      </li>
      <li>
        <p>验证码</p>
        <div style="position: relative">
          <input
            class="captcha"
            type="text"
            placeholder="验证码"
            v-model="captcha"
          />
          <van-button
            :disabled="!(remainTime <= 0)"
            style="margin-top: 1px; margin-left: 4px; position: absolute"
            @click="loadCaptcha"
            >{{
              remainTime <= 0 ? "获取验证码" : `剩余${remainTime}秒`
            }}</van-button
          >
        </div>
      </li>
    </ul>
    <router-link to="/" class="forget">忘记密码？</router-link>
    <van-button type="primary" size="large" class="submit" @click="reg"
      >注册</van-button
    >
    <p class="register">
      <span>已有账号?</span
      ><router-link to="/login" class="to-register">快去登录</router-link>
    </p>
  </div>
</template>
<script setup lang="ts">
import TipText from "../components/TipText.vue";
import useAuth from "../hooks/use-auth";

const { mobile, captcha, loadCaptcha, reg, remainTime } = useAuth();
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
    .captcha {
      width: 40%;
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
