import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 作废方案信息
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
    '/mediinfo-vela-zhikong/api/v1.0/zhikongfa/ZuoFeiFangAn',
    params,
  );
  return http.request({ url, method: 'DELETE', params, ...config });
}
