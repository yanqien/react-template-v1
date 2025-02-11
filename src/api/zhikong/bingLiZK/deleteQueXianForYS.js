import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 医生作废病历时相关缺陷操作
 *
 * @param {Object} params
 * @param {string} params.bingRenID
 * @param {string} params.zhuYuanJZID
 * @param {string} params.bingLiJLID
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 *
 * @return {Promise<*>}
 */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/ZuoFeiQueXianForYS',
    params,
  );
  return http.request({ url, method: 'DELETE', params, ...config });
}
