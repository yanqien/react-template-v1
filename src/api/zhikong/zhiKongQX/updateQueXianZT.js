import http from '@/lib/http';
import { toURL } from '@/lib/util';
/**
 * 缺陷状态更新
 * @param {Object} data
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 * @return {Promise<*>}
 */
export function request(data, config) {
  data = data || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongqx/UpdateQueXianZT',
    data,
  );
  return http.request({ url, method: 'PUT', data, ...config });
}
