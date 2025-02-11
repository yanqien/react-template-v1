import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据方案ID和分类ID获取项目ID列表
 *
 * @param {Object} params
 * @param {string} params.fangAnID
 * @param {string} params.fenLeiID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/GetXiangMuIDListByFAFL',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
