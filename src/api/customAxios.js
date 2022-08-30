import axios from "axios";

export const instance = axios.create({
  baseURL: "https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/", // 기본 서버 주소 입력
});
