import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取质控规则执行结果
 *
 * @param {Object} params
 * @param {string} params.kaiShiSJ
 * @param {string} params.jieShuSJ
 * @param {string} params.zhiKongLXDM
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzx/GetZhiKongGZZXForJob',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
