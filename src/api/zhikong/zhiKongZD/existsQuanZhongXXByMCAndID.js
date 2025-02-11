import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据权重名称和权重ID判断是否存在
 *
 * @param {Object} params
 * @param {string} params.id
 * @param {string} params.quanZhongMC
 * @param {string} params.jiGouID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/existsQuanZhongXXByMCAndID',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
