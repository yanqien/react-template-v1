import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取首页质控提醒（待整改）
 *
 * @param {Object} params
 * @param {string} params.renWuRQ
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongrw/GetShouYeZKTXForDZG',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
