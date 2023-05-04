import dayjs from "dayjs";

export const serverUrl = "http://120.26.71.58:3000";

export const uploadActionUrl = serverUrl + "/api/v1/common/upload_file";

export const setToken = (token: string) =>
  sessionStorage.setItem("token", token);

export const getToken = () => sessionStorage.getItem("token");

export const removeToken = () => sessionStorage.removeItem("token");

export const dalImg = (url: string) => {
  if (url) {
    if (url.startsWith("http")) return url;
    return serverUrl + url;
  }
  return "https://img0.baidu.com/it/u=1942227309,2357463638&fm=253&fmt=auto&app=138&f=PNG?w=600&h=500";
};

/**
 * 格式化日期
 * @param str
 * @returns
 */
export const formatDate = (str: Date | string | undefined) =>
  dayjs(str).format("YYYY-MM-DD");

/**
 * 可以选择的最大日期
 */
export const selectMaxDate = dayjs(new Date()).add(3, "y").toDate();
