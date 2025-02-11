import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据主键ID - 获取方案规则详情
 *
 * @param {Object} params
 * @param {string} params.id
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongfa/GetFangAnGZByID',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
