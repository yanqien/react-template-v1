import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取相似度比较
 *
 * @param {Object} params
 * @param {string} params.zhiKongFS
 * @param {string} params.text1
 * @param {string} params.text2
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/GetXingShiDZK',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
