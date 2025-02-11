import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取档案质控规则总数(根据质控年度)
 *
 * @param {Object} params
 * @param {string} params.zhiKongND
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongfa/GetDangAnGZCountByZKND',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
