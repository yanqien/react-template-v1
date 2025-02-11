import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据分类ID获取数据集信息
 *
 * @param {Object} params
 * @param {string} params.fenLeiID
 * @param {string} params.likeQuery
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/shucangzk/jigousjjxx/GetZhiKongSJJXX',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
