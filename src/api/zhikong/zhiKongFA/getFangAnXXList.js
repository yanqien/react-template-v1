import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取方案列表
 *
 * @param {Object} params
 * @param {string} params.leiXingDM
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongfa/GetFangAnXXList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
