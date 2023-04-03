import { get, post, put } from "../utils/request";

/**
 * 登录
 * @param param
 * @returns
 */
export const loginAPI = ({ mobile, captcha }: User.IUserLoginInfo) => {
  return post("/api/v1/auth/ll_login", {
    userName: mobile,
    pwd: captcha,
  });
};

/**
 * 获取验证码
 * @param mobile
 * @returns
 */
export const getCaptchaAPI = (mobile: string) => {
  return get("/api/v1/common/captcha", {
    mobile,
  });
};

/**
 * 注册
 * @param param0
 * @returns
 */
export const regAPI = ({ mobile, captcha }: User.IUserLoginInfo) => {
  return post("/api/v1/auth/ll_reg", {
    userName: mobile,
    pwd: captcha,
  });
};

/**
 * 实名认证
 * @param info
 * @returns
 */
export const setInfoAPI = (info: User.IRealInfo) => {
  return put("/api/v1/land_lords/ll_set_id_num", info);
};

/**
 * 获取用户信息
 * @returns
 */
export const loadUserInfoAPI = () => get("/api/v1/land_lords/info");
