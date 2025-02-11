import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据数据源类别ID查询值域
 *
 * @param {Object} params
 * @param {string} params.shuJuYLBID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/getShuJuYZYListByLB',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
