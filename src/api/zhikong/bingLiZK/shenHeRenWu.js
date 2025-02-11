import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
 * 审核任务
 * @param {Object} formData
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 * @return {Promise<*>}
 */
export function request(data, config) {
  data = data || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/binglizk/ShenHeRenWu',
    data,
  );
  return http.request({ url, method: 'PUT', data, ...config });
}
