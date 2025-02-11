import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 方案分类
 *
 * @param {Object} params
 * @param {string} params.keShiID
 * @param {string} params.zhiKongLXDM
 * @param {string} params.yongHuID
 * @param {string} params.jueSeDM
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongqx/GetZhiKongYXLList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
