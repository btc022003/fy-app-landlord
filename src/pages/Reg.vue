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
    <van-button type="primary" size="large" class="submit" @click="submit"
      >注册</van-button
    >
    <p class="register">
      <span>已有账号?</span
      ><router-link to="/login" class="to-register">快去登录</router-link>
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { showToast } from "vant";
import TipText from "../components/TipText.vue";
import { getCaptchaAPI, regAPI } from "../services/auth";

const router = useRouter();
const remainTime = ref(0);
const mobile = ref("");
const captcha = ref("");
let timer: any = null;

const loadCaptcha = async () => {
  if (mobile.value) {
    await getCaptchaAPI(mobile.value);
    remainTime.value = 120;
    showToast({
      type: "success",
      message: "获取验证码成功",
    });
    timer = setInterval(() => {
      if (remainTime.value > 0) {
        remainTime.value--;
      } else {
        remainTime.value = 0;
        clearInterval(timer);
      }
    }, 1000);
  } else {
    showToast({
      type: "fail",
      message: "请输入手机号",
    });
  }
};

const submit = async () => {
  if (mobile.value && captcha.value) {
    const res = await regAPI({
      mobile: mobile.value,
      captcha: captcha.value,
    });
    if (res.success) {
      showToast({
        type: "success",
        message: res.errorMessage,
      });
      sessionStorage.setItem("token", res.data);
      clearInterval(timer);
      setTimeout(() => router.replace("/"), 1000);
    } else {
      showToast({
        type: "fail",
        message: res.errorMessage,
      });
    }
  } else {
    showToast({
      type: "fail",
      message: "请输入手机号和验证码",
    });
  }
  // localStorage.setItem("token", "xxx");
  // showToast("登录成功");
  // setTimeout(() => router.replace("/"), 1000);
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
