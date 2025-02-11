import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据分类id和项目id获取规则下拉列表
 *
 * @param {Object} params
 * @param {string} params.fenLeiID
 * @param {string} params.xiangMuID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikonggz/GetZhiKongGZSelectList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
