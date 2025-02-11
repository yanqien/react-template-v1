import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据规则主键id作废规则信息
 *
 * @param {Object} params
 * @param {string} params.id
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikonggz/ZuoFeiZhiKongGZ',
    params,
  );
  return http.request({ url, method: 'DELETE', params, ...config });
}
