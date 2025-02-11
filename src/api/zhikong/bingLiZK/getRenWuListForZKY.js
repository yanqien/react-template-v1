import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取任务列表(根据质控月)
 *
 * @param {Object} params
 * @param {string} params.zhiKongLXDM
 * @param {string} params.renWuRQ
 * @param {string} params.likeQuery
 * @param {string} params.dangQianZTDM
 * @param {string} params.bingLiLXDM
 * @param {string} params.pageSize
 * @param {string} params.pageIndex
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/GetRenWuListForZKY',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
