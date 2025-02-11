import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取质控任务列表
 *
 * @param {Object} params
 * @param {string} params.renWuRQ
 * @param {string} params.fangAnId
 * @param {string} params.zhiKongLXDM
 * @param {string} params.keShiId
 * @param {string} params.zhiKongRID
 * @param {string} params.dangQianZTDM
 * @param {string} params.likeQuery
 * @param {string} params.bingLiLXDM
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongrw/GetZhiKongRWList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
