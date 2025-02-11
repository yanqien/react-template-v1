import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 数仓后置质控执行
 *
 * @param {Object} params
 * @param {string} params.kaiShiSJ
 * @param {string} params.jieShuSJ
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/shucangzk/ShuCangHZZKZX',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
