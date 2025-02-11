import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取总任务数
 *
 * @param {Object} params
 * @param {string} params.renWuRQ
 * @param {string} params.fangAnId
 * @param {string} params.zhiKongLXDM
 * @param {string} params.zhiKongKSID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongrw/GetZongRenWS',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
