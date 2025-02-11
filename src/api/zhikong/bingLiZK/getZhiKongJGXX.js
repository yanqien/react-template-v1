import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取病历质控结果
 *
 * @param {Object} params
 * @param {string} params.bingRenID
 * @param {string} params.zhuYuanJZID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/GetZhiKongJGXX',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
