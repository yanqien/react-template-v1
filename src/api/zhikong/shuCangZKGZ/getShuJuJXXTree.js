import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取元数据数据集分类树
 *
 * @param {Object} params
 * @param {string} params.moJiBZ
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/shucangzk/zhikonggz/GetShuJuJXXTree',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
