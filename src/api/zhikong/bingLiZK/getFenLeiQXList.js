import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取分类缺陷列表信息（包括AI质控结果和人工质控结果）
 *
 * @param {Object} params
 * @param {string} params.zhuYuanJZID
 * @param {string} params.renWuID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/GetFenLeiQXList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
