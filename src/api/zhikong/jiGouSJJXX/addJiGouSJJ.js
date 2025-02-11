import http from '@/lib/http';
import { toURL } from '@/lib/util';
/**
 * 保存机构数据集信息
 * @param {Object} data
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 * @return {Promise<*>}
 */
export function request(data, config) {
  data = data || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/shucangzk/jigousjjxx/AddJiGouSJJ',
    data,
  );
  return http.request({ url, method: 'POST', data, ...config });
}
