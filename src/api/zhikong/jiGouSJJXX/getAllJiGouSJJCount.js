import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取所有机构数据集总量
 *
 * @param {Object} params
 * @param {string} params.likeQuery
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/shucangzk/jigousjjxx/GetAllJiGouSJJCount',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
