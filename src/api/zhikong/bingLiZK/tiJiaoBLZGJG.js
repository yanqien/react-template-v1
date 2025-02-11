import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 提交病例结果
 * @param {Object} formData
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 * @return {Promise<*>}
 */
export function request(data, config) {
  data = data || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/TiJiaoBLZGJG',
    data,
  );
  return http.request({ url, method: 'POST', data, ...config });
}
