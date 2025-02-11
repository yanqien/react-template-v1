import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 提交质控结果信息
 * @param {Object} formData
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 * @return {Promise<*>}
 */
export function request(data, config) {
  data = data || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/TiJiaoZKJGXX',
    data,
  );
  return http.request({ url, method: 'PUT', data, ...config });
}
