import http from '@/lib/http';
import { toURL } from '@/lib/util';
/**
 * 保存任务设置
 * @param {Object} data
 * @param {import('axios').AxiosRequestConfig} config axios 可选配置
 * @return {Promise<*>}
 */
export function request(data, config) {
  data = data || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/saveRenWuSZ',
    data,
  );
  return http.request({ url, method: 'POST', data, ...config });
}
