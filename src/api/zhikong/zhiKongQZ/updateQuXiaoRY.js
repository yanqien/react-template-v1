import http from '@/lib/http';
import { toURL } from '@/lib/util';
/**
 * 取消入院
 * @param {Object} data
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 * @return {Promise<*>}
 */
export function request(data, config) {
  data = data || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongqz/JZ_ZY_QuXiaoRY',
    data,
  );
  return http.request({ url, method: 'POST', data, ...config });
}
