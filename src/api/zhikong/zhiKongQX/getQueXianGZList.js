import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取缺陷跟踪列表
 *
 * @param {Object} params
 * @param {string} params.yueFen
 * @param {string} params.kaiShiSJ
 * @param {string} params.jieShuSJ
 * @param {string} params.fangAn
 * @param {string} params.bingLiDJ
 * @param {string} params.zhuZhiYS
 * @param {string} params.zhiKongYuan
 * @param {string} params.shenHeZT
 * @param {string} params.zhiKongLXDM
 * @param {string} params.likeQuery
 * @param {string} params.pageSize
 * @param {string} params.pageIndex
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongqx/GetQueXianGZList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
