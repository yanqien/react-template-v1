import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 根据质控类型获取质控分类最大顺序号
 *
 * @param {Object} params
 * @param {string} params.leiXingDM
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/getMaxShunXuHaoByLeiXing',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
