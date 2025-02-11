import http from '@/lib/http';
import { toURL } from '@/lib/util';
/**
 * 查询前质控记录
 * @param {Object} data
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 * @return {Promise<*>}
 */
export function request(data, config) {
  data = data || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/shucangzk/qianzhikong/GetQianZhiKJL',
    data,
  );
  return http.request({ url, method: 'POST', data, ...config });
}
