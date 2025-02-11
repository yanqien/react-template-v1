import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 更新权重规则
 *
 * @param {Object} params
 * @param {string} params.quanZhongID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongqz/GengxinQuanZhongGZ',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
