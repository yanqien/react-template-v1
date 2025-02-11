import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取手动规则列表
 *
 * @param {Object} params
 * @param {string} params.fangAnID
 * @param {string} params.fenLeiID
 * @param {string} params.xiangMuID
 * @param {string} params.quanJuBZ
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/GetShouDongGZList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
