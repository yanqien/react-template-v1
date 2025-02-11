import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 获取质控稳定性报告明细统计结果
 *
 * @param {Object} params
 * @param {string} params.zuZhiJGID
 * @param {string} params.shuJuJID
 * @param {string} params.yeWuKSRQ
 * @param {string} params.yeWuJSRQ
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/shucangzk/zhikongbg/GetWenDingXMXTJJG',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
