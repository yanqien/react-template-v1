import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取数据源值域总数
 *
 * @param {Object} params
 * @param {string} params.zuZhiJGID
 * @param {string} params.shuJuYLBID
 * @param {string} params.likeQuery
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/getShuJuYZYCount',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
