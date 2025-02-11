import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据字段编码和分类id获取规则信息
 *
 * @param {Object} params
 * @param {string} params.fenLeiID
 * @param {string} params.ziDuanBM
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikonggz/GetZhiKongGZByZDBM',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
