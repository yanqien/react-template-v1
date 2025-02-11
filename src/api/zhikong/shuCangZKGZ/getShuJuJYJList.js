import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取数据集预警
 *
 * @param {Object} params
 * @param {string} params.shuJuJID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/shucangzk/zhikonggz/GetShuJuJYJList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
