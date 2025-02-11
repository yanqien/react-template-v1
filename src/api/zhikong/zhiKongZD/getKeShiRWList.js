import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取已设置任务的科室列表
 *
 * @param {Object} params
 * @param {string} params.bingLiLXDM
 * @param {string} params.zhiKongLXDM
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/getKeShiRWList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
