import { ref, onUnmounted } from "vue";
import { showToast } from "vant";
import { useRouter } from "vue-router";
import { getCaptchaAPI, loginAPI, regAPI } from "../services/auth";

function useAuth() {
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

  const reg = async () => {
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
  };

  const login = async () => {
    if (mobile.value && captcha.value) {
      const res = await loginAPI({
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
  };
  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });
  return {
    mobile,
    captcha,
    loadCaptcha,
    reg,
    login,
    remainTime,
  };
}

export default useAuth;
