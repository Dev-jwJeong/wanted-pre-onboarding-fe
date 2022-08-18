import axios from 'axios';

export const instance = axios.create({
  baseURL:
    'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/', // 기본 서버 주소 입력
});
