import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取获取任务总数
 *
 * @param {Object} params
 * @param {string} params.renWuRQ
 * @param {string} params.fangAnID
 * @param {string} params.keShiId
 * @param {string} params.zhiKongLXDM
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/getRenWuZS',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
