import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取待质控列表
 *
 * @param {Object} params
 * @param {string} params.bingLiLXDM
 * @param {string} params.zhiKongLXDM
 * @param {string} params.kaiShiRQ
 * @param {string} params.jieShuRQ
 * @param {string} params.keShiId
 * @param {string} params.zhenDuanMC
 * @param {string} params.likeQuery
 * @param {string} params.quanZhongIDList
 * @param {string} params.renWuRQ
 * @param {string} params.fangAnID
 * @param {string} params.pageIndex
 * @param {string} params.pageSize
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/getDaiZhiKongPageList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
