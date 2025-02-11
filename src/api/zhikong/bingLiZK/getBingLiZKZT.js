import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 判断病历质控状态
 *
 * @param {Object} params
 * @param {string} params.bingRenID
 * @param {string} params.zhuYuanJZID
 * @param {string} params.fangAnID
 * @param {string} params.renWuID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/PanDuanBLZKZT',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
