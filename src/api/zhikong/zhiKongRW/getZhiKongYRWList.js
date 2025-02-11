import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 院级/科级质控员任务列表
 *
 * @param {Object} params
 * @param {string} params.zhiKongLXDM
 * @param {string} params.keShiId
 * @param {string} params.renWuRQ
 * @param {string} params.fangAnID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongrw/ZhiKongYRWList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
