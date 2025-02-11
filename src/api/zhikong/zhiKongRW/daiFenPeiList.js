import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 待分配列表
 *
 * @param {Object} params
 * @param {string} params.fangAnId
 * @param {string} params.zhiKongLXDM
 * @param {string} params.keShiID
 * @param {string} params.renWuRQ
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongrw/DaiFenPeiList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
