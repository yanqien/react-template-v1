import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 *  获取缺陷列表信息
 *
 * @param {Object} params
 * @param {string} params.bingLiJLID
 * @param {string} params.renWuID
 * @param {string} params.fenLeiID
 * @param {string} params.chaXunYWLX
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/GetQueXianList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
