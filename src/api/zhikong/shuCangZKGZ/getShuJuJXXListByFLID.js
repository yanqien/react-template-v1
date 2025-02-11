import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据父类ID获取元数据数据集，不传查询全部
 *
 * @param {Object} params
 * @param {string} params.fuLeiID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/shucangzk/zhikonggz/GetShuJuJXXListByFLID',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
